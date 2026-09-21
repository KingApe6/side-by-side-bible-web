/**
 * Words of Jesus (WOJ) — load CrossWire-derived segment index and apply
 * red-letter markup onto displayed verse text.
 *
 * KJV: best-effort segment alignment against getBible text; fallback to
 * whole-verse red when the verse has any Jesus markup but texts diverge.
 * WEB/ASV: whole-verse approximate tint when the same KJV verse has WOJ.
 */

export type WojSegment = { t: string; j?: true };

/** chapter:verse → segments (only verses that contain Jesus words). */
export type WojBookIndex = Record<string, WojSegment[]>;

const cache = new Map<number, WojBookIndex | null>();
const inflight = new Map<number, Promise<WojBookIndex | null>>();

function wojUrl(bookNumber: number): string {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}data/woj/${bookNumber}.json`;
}

/** Lazy-load per-book WOJ index (null = no file / no Jesus words in book). */
export async function loadWojBook(bookNumber: number): Promise<WojBookIndex | null> {
  if (cache.has(bookNumber)) return cache.get(bookNumber)!;
  let promise = inflight.get(bookNumber);
  if (!promise) {
    promise = (async () => {
      try {
        const res = await fetch(wojUrl(bookNumber));
        if (!res.ok) return null;
        return (await res.json()) as WojBookIndex;
      } catch {
        return null;
      } finally {
        inflight.delete(bookNumber);
      }
    })();
    inflight.set(bookNumber, promise);
  }
  const data = await promise;
  cache.set(bookNumber, data);
  return data;
}

export function verseKey(chapter: number, verse: number): string {
  return `${chapter}:${verse}`;
}

export function verseHasJesus(
  index: WojBookIndex | null | undefined,
  chapter: number,
  verse: number,
): boolean {
  const segs = index?.[verseKey(chapter, verse)];
  return !!segs?.some((s) => s.j);
}

/** Normalize for comparison / alignment. */
export function normalizeForAlign(s: string): string {
  return s
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201C|\u201D/g, '"')
    .replace(/\u2014|\u2013|—|–/g, '-')
    .replace(/\u00A0/g, ' ')
    .replace(/¶/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapJesus(htmlEscaped: string): string {
  return `<span class="words-of-jesus">${htmlEscaped}</span>`;
}

function foldChar(c: string): string {
  if (c === '\u2018' || c === '\u2019') return "'";
  if (c === '\u201C' || c === '\u201D') return '"';
  if (c === '\u2014' || c === '\u2013' || c === '—' || c === '–') return '-';
  if (c === '\u00A0') return ' ';
  return c;
}

/** Build jesus mask over normalizeForAlign(segments joined by space). */
function buildJoinedMask(segments: WojSegment[]): { norm: string; mask: boolean[] } | null {
  const joined = segments.map((s) => s.t).join(' ');
  const norm = normalizeForAlign(joined);
  const mask = new Array<boolean>(norm.length).fill(false);
  let pos = 0;
  for (let i = 0; i < segments.length; i++) {
    const sn = normalizeForAlign(segments[i]!.t);
    if (!sn) continue;
    if (i > 0) {
      if (pos < norm.length && norm[pos] === ' ') pos += 1;
    }
    if (norm.slice(pos, pos + sn.length) !== sn) {
      const idx = norm.indexOf(sn, Math.max(0, pos - 1));
      if (idx < 0) return null;
      pos = idx;
    }
    if (segments[i]!.j) {
      for (let k = 0; k < sn.length; k++) mask[pos + k] = true;
    }
    pos += sn.length;
  }
  return { norm, mask };
}

/**
 * Paint display text using a mask defined on normalizeForAlign(display).
 * Preserves original display characters/whitespace.
 */
function paintWithMask(display: string, mask: boolean[]): string | null {
  const norm = normalizeForAlign(display);
  if (norm.length !== mask.length) return null;

  type Piece = { j: boolean; text: string };
  const pieces: Piece[] = [];
  let buf = '';
  let bufJ = false;

  const flush = (): void => {
    if (!buf) return;
    pieces.push({ j: bufJ, text: buf });
    buf = '';
  };

  let di = 0;
  let ni = 0;

  // leading whitespace (stripped from norm)
  while (di < display.length && /\s/.test(display[di]!)) {
    pieces.push({ j: false, text: display[di]! });
    di += 1;
  }

  while (ni < norm.length && di < display.length) {
    const nc = norm[ni]!;
    const wantJ = mask[ni]!;

    if (nc === ' ') {
      let ws = '';
      while (di < display.length && /\s/.test(display[di]!)) {
        ws += display[di]!;
        di += 1;
      }
      if (!ws) return null;
      if (buf && bufJ !== wantJ) flush();
      bufJ = wantJ;
      buf += ws;
      ni += 1;
      continue;
    }

    // skip extra display whitespace (should not happen mid-token)
    while (di < display.length && /\s/.test(display[di]!)) {
      flush();
      pieces.push({ j: false, text: display[di]! });
      di += 1;
    }
    if (di >= display.length) return null;

    const dch = display[di]!;
    const folded = foldChar(dch);
    if (folded !== nc && dch !== nc) return null;

    if (buf && bufJ !== wantJ) flush();
    bufJ = wantJ;
    buf += dch;
    di += 1;
    ni += 1;
  }

  flush();
  if (ni !== norm.length) return null;
  if (di < display.length) {
    pieces.push({ j: false, text: display.slice(di) });
  }

  return pieces
    .map((p) => (p.j ? wrapJesus(escapeHtml(p.text)) : escapeHtml(p.text)))
    .join('');
}

/**
 * When normalized texts differ (e.g. Judaea/Judea), try locating each
 * segment in order within the display text. Returns null if any Jesus
 * segment cannot be found.
 */
function fuzzyPaint(display: string, segments: WojSegment[]): string | null {
  const normDisp = normalizeForAlign(display);

  // Map each norm index to a display index of the matching character.
  const normToDisp: number[] = new Array(normDisp.length);
  {
    let di = 0;
    while (di < display.length && /\s/.test(display[di]!)) di += 1;
    for (let ni = 0; ni < normDisp.length; ni++) {
      const nc = normDisp[ni]!;
      if (nc === ' ') {
        if (di >= display.length || !/\s/.test(display[di]!)) return null;
        normToDisp[ni] = di;
        while (di < display.length && /\s/.test(display[di]!)) di += 1;
        continue;
      }
      while (di < display.length && /\s/.test(display[di]!)) di += 1;
      if (di >= display.length) return null;
      if (foldChar(display[di]!) !== nc && display[di] !== nc) return null;
      normToDisp[ni] = di;
      di += 1;
    }
  }

  type Range = { start: number; end: number };
  const ranges: Range[] = [];
  let searchFrom = 0;
  for (const seg of segments) {
    const sn = normalizeForAlign(seg.t);
    if (!sn) continue;
    const idx = normDisp.indexOf(sn, searchFrom);
    if (idx < 0) return null;
    if (seg.j) {
      const start = normToDisp[idx]!;
      const last = normToDisp[idx + sn.length - 1]!;
      ranges.push({ start, end: last + 1 });
    }
    searchFrom = idx + sn.length;
  }

  if (!ranges.length) return escapeHtml(display);

  ranges.sort((a, b) => a.start - b.start);
  const merged: Range[] = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r.start <= last.end) last.end = Math.max(last.end, r.end);
    else merged.push({ ...r });
  }

  let out = '';
  let cursor = 0;
  for (const r of merged) {
    if (r.start > cursor) out += escapeHtml(display.slice(cursor, r.start));
    out += wrapJesus(escapeHtml(display.slice(r.start, r.end)));
    cursor = r.end;
  }
  if (cursor < display.length) out += escapeHtml(display.slice(cursor));
  return out;
}

/**
 * Render KJV verse HTML with precise WOJ spans when possible.
 * Returns HTML-safe markup (may contain .words-of-jesus spans).
 */
export function renderKjvWithWoj(
  displayText: string,
  segments: WojSegment[] | undefined,
  showRed: boolean,
): string {
  if (!showRed || !segments?.length) {
    return escapeHtml(displayText);
  }
  if (!segments.some((s) => s.j)) {
    return escapeHtml(displayText);
  }

  const built = buildJoinedMask(segments);
  if (built && normalizeForAlign(displayText) === built.norm) {
    const html = paintWithMask(displayText, built.mask);
    if (html) return html;
  }

  const fuzzy = fuzzyPaint(displayText, segments);
  if (fuzzy != null) return fuzzy;

  // Fallback: any Jesus markup in this verse → whole verse red
  return wrapJesus(escapeHtml(displayText));
}

/** WEB/ASV: whole-verse approximate red when KJV verse has any Jesus words. */
export function renderApproxWoj(
  displayText: string,
  hasJesusInKjv: boolean,
  showRed: boolean,
): string {
  if (!showRed || !hasJesusInKjv) return escapeHtml(displayText);
  return wrapJesus(escapeHtml(displayText));
}
