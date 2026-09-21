#!/usr/bin/env python3
"""
Build compact Words-of-Jesus (WOJ) segment index from CrossWire KJV OSIS.

Usage:
  python3 scripts/build-woj.py /path/to/kjv.xml
  # or with zip:
  python3 scripts/build-woj.py /path/to/kjv2_8-osis-*.zip

Output: public/data/woj/{bookNumber}.json and meta.json

Source (default download):
  https://crosswire.org/~dmsmith/kjv2011/kjv2.8/kjv2_8-osis-201512200842.zip

License: CrossWire grants a general public license to use the KJV2003/OSIS text
for any purpose; attribute CrossWire / the KJV OSIS module in About.
"""

from __future__ import annotations

import json
import re
import sys
import zipfile
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / 'public' / 'data' / 'woj'

OSIS_BOOKS = [
    'Gen', 'Exod', 'Lev', 'Num', 'Deut', 'Josh', 'Judg', 'Ruth', '1Sam', '2Sam',
    '1Kgs', '2Kgs', '1Chr', '2Chr', 'Ezra', 'Neh', 'Esth', 'Job', 'Ps', 'Prov',
    'Eccl', 'Song', 'Isa', 'Jer', 'Lam', 'Ezek', 'Dan', 'Hos', 'Joel', 'Amos',
    'Obad', 'Jonah', 'Mic', 'Nah', 'Hab', 'Zeph', 'Hag', 'Zech', 'Mal',
    'Matt', 'Mark', 'Luke', 'John', 'Acts', 'Rom', '1Cor', '2Cor', 'Gal', 'Eph',
    'Phil', 'Col', '1Thess', '2Thess', '1Tim', '2Tim', 'Titus', 'Phlm', 'Heb',
    'Jas', '1Pet', '2Pet', '1John', '2John', '3John', 'Jude', 'Rev',
]


def load_xml(path: Path) -> str:
    if path.suffix.lower() == '.zip':
        with zipfile.ZipFile(path) as zf:
            names = [n for n in zf.namelist() if n.endswith('kjv.xml')]
            if not names:
                names = [n for n in zf.namelist() if n.endswith('.xml')]
            if not names:
                raise SystemExit(f'No XML found in {path}')
            return zf.read(names[0]).decode('utf-8')
    return path.read_text(encoding='utf-8')


def parse_book(xml: str, book: str) -> dict[str, list[dict]]:
    m = re.search(rf'<div type="book" osisID="{re.escape(book)}"[^>]*>', xml)
    if not m:
        return {}
    m2 = re.search(r'<div type="book" osisID="', xml[m.end():])
    end = m.end() + m2.start() if m2 else len(xml)
    content = xml[m.start():end]
    verses: dict[str, list[dict]] = {}
    jesus = False
    token_re = re.compile(
        r'(?P<vs><verse\s+[^>]*osisID="(?P<vid>[^"]+)"[^>]*sID="[^"]*"\s*/>)|'
        r'(?P<ve><verse\s+[^>]*eID="[^"]*"\s*/>)|'
        r'(?P<qo><q\s+[^>]*who="Jesus"[^>]*>)|'
        r'(?P<qc></q>)|'
        r'(?P<tag><[^>]+>)|'
        r'(?P<text>[^<]+)',
        re.I,
    )
    cur: str | None = None
    segs: list[list] = []

    def flush() -> None:
        nonlocal segs, cur
        if cur is None:
            return
        merged: list[list] = []
        for t, j in segs:
            if not t:
                continue
            if merged and merged[-1][1] == j:
                merged[-1][0] += t
            else:
                merged.append([t, j])
        out: list[dict] = []
        for t, j in merged:
            t2 = re.sub(r'\s+', ' ', t).strip()
            if t2:
                d: dict = {'t': t2}
                if j:
                    d['j'] = True
                out.append(d)
        parts = cur.split('.')
        if len(parts) == 3 and any('j' in x for x in out):
            verses[f'{parts[1]}:{parts[2]}'] = out
        segs = []

    for mo in token_re.finditer(content):
        if mo.group('vs'):
            flush()
            cur = mo.group('vid')
            segs = []
        elif mo.group('ve'):
            flush()
            cur = None
        elif mo.group('qo'):
            jesus = True
        elif mo.group('qc'):
            jesus = False
        elif mo.group('text') and cur is not None:
            segs.append([unescape(mo.group('text')), jesus])
    flush()
    return verses


def main() -> None:
    if len(sys.argv) < 2:
        print(__doc__)
        raise SystemExit('Pass path to kjv.xml or the CrossWire OSIS zip.')
    src = Path(sys.argv[1])
    xml = load_xml(src)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for p in OUT_DIR.glob('*.json'):
        p.unlink()

    meta = {
        'source': 'CrossWire KJV OSIS (kjv2.8)',
        'sourceUrl': 'https://crosswire.org/~dmsmith/kjv2011/kjv2.8/kjv2_8-osis-201512200842.zip',
        'license': (
            'CrossWire grants a general public license to use the KJV2003/OSIS text '
            'for any purpose; attribute CrossWire / the KJV OSIS module.'
        ),
        'format': (
            'Per-book map of "chapter:verse" → segments [{t, j?}]. '
            'j:true = words of Jesus from <q who="Jesus"> (spans tracked across verses).'
        ),
        'books': [],
    }

    for num, book in enumerate(OSIS_BOOKS, start=1):
        verses = parse_book(xml, book)
        if not verses:
            continue
        path = OUT_DIR / f'{num}.json'
        path.write_text(json.dumps(verses, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
        meta['books'].append({
            'n': num,
            'osis': book,
            'verses': len(verses),
            'bytes': path.stat().st_size,
        })
        print(f'wrote {path.name} ({len(verses)} verses)')

    (OUT_DIR / 'meta.json').write_text(json.dumps(meta, indent=2) + '\n', encoding='utf-8')
    print(f'done — {len(meta["books"])} books with WOJ → {OUT_DIR}')


if __name__ == '__main__':
    main()
