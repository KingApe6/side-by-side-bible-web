import { DEFAULT_COLUMN_IDS, enabledTranslations } from '../data/translations';

const KEYS = {
  columns: 'sbsb.columns',
  columnCount: 'sbsb.columnCount',
  book: 'sbsb.book',
  chapter: 'sbsb.chapter',
  bgHex: 'sbsb.bgHex',
  textHex: 'sbsb.textHex',
  setupDone: 'sbsb.setupDone',
  showRedLetter: 'sbsb.showRedLetter',
} as const;

export type AppPreferences = {
  columnIds: string[];
  columnCount: 2 | 3 | 4;
  bookNumber: number;
  chapter: number;
  backgroundHex: string;
  textHex: string;
  setupDone: boolean;
  /** Show Jesus' words in red (default ON). */
  showRedLetter: boolean;
};

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function enabledIdSet(): Set<string> {
  return new Set(enabledTranslations().map((t) => t.id));
}

function sanitizeColumns(ids: string[], count: number): string[] {
  const allowed = enabledIdSet();
  const defaults = [...DEFAULT_COLUMN_IDS];
  const next: string[] = [];
  for (let i = 0; i < count; i++) {
    const candidate = ids[i];
    if (candidate && allowed.has(candidate)) {
      next.push(candidate);
    } else {
      next.push(defaults[i % defaults.length] ?? 'kjv');
    }
  }
  return next;
}

export function loadPreferences(): AppPreferences {
  const rawCount = Number(localStorage.getItem(KEYS.columnCount) ?? '2');
  const columnCount = ([2, 3, 4].includes(rawCount) ? rawCount : 2) as 2 | 3 | 4;
  const columnIds = sanitizeColumns(readJson<string[]>(KEYS.columns, [...DEFAULT_COLUMN_IDS]), columnCount);
  const bookNumber = Math.min(66, Math.max(1, Number(localStorage.getItem(KEYS.book) ?? '1') || 1));
  const chapter = Math.max(1, Number(localStorage.getItem(KEYS.chapter) ?? '1') || 1);
  const redRaw = localStorage.getItem(KEYS.showRedLetter);
  return {
    columnIds,
    columnCount,
    bookNumber,
    chapter,
    backgroundHex: localStorage.getItem(KEYS.bgHex) ?? '',
    textHex: localStorage.getItem(KEYS.textHex) ?? '',
    setupDone: localStorage.getItem(KEYS.setupDone) === '1',
    // Default ON when unset
    showRedLetter: redRaw == null ? true : redRaw === '1',
  };
}

export function saveColumns(columnIds: string[], columnCount: 2 | 3 | 4): void {
  localStorage.setItem(KEYS.columnCount, String(columnCount));
  localStorage.setItem(KEYS.columns, JSON.stringify(sanitizeColumns(columnIds, columnCount)));
  localStorage.setItem(KEYS.setupDone, '1');
}

export function saveLocation(bookNumber: number, chapter: number): void {
  localStorage.setItem(KEYS.book, String(bookNumber));
  localStorage.setItem(KEYS.chapter, String(chapter));
}

export function saveAppearance(backgroundHex: string, textHex: string): void {
  localStorage.setItem(KEYS.bgHex, backgroundHex);
  localStorage.setItem(KEYS.textHex, textHex);
}

export function saveShowRedLetter(show: boolean): void {
  localStorage.setItem(KEYS.showRedLetter, show ? '1' : '0');
}
