/**
 * Lazy per-book loader for getBible v2 public-domain modules.
 * Never invents verse text — only returns API data or empty maps on failure.
 */

import { getTranslation } from '../data/translations';

const API_BASE = 'https://api.getbible.net/v2';

export type VerseMap = Map<number, string>;

interface ApiVerse {
  verse: number;
  text: string;
}

interface ApiChapter {
  chapter: number;
  verses: ApiVerse[];
}

interface ApiBook {
  nr: number;
  name: string;
  chapters: ApiChapter[];
}

/** Cache: translationId -> bookNumber -> chapterNumber -> verse map */
const bookCache = new Map<string, Map<number, Map<number, VerseMap>>>();
const inflight = new Map<string, Promise<Map<number, VerseMap>>>();

function cacheKey(translationId: string, bookNumber: number): string {
  return `${translationId}:${bookNumber}`;
}

function indexBook(book: ApiBook): Map<number, VerseMap> {
  const chapters = new Map<number, VerseMap>();
  for (const ch of book.chapters ?? []) {
    const verses = new Map<number, string>();
    for (const v of ch.verses ?? []) {
      if (typeof v.verse === 'number' && typeof v.text === 'string') {
        verses.set(v.verse, v.text);
      }
    }
    chapters.set(ch.chapter, verses);
  }
  return chapters;
}

async function fetchBook(translationId: string, bookNumber: number): Promise<Map<number, VerseMap>> {
  const meta = getTranslation(translationId);
  if (!meta?.enabled || !meta.apiSlug) {
    throw new Error(`Translation "${translationId}" is not loadable.`);
  }

  const url = `${API_BASE}/${meta.apiSlug}/${bookNumber}.json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load ${meta.abbreviation} book ${bookNumber} (${res.status}).`);
  }
  const data = (await res.json()) as ApiBook;
  return indexBook(data);
}

/** Load a chapter's verse map for one translation (lazy book fetch + cache). */
export async function loadChapterVerses(
  translationId: string,
  bookNumber: number,
  chapter: number,
): Promise<VerseMap> {
  let byBook = bookCache.get(translationId);
  if (!byBook) {
    byBook = new Map();
    bookCache.set(translationId, byBook);
  }

  let chapters = byBook.get(bookNumber);
  if (!chapters) {
    const key = cacheKey(translationId, bookNumber);
    let promise = inflight.get(key);
    if (!promise) {
      promise = fetchBook(translationId, bookNumber).finally(() => inflight.delete(key));
      inflight.set(key, promise);
    }
    chapters = await promise;
    byBook.set(bookNumber, chapters);
  }

  return chapters.get(chapter) ?? new Map();
}

export async function loadChapterForColumns(
  columnIds: string[],
  bookNumber: number,
  chapter: number,
): Promise<VerseMap[]> {
  return Promise.all(columnIds.map((id) => loadChapterVerses(id, bookNumber, chapter)));
}
