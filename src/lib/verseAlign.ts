import type { VerseMap } from './bibleLoader';

export interface AlignedVerse {
  verse: number;
  /** Parallel texts; null means missing in that translation. */
  texts: (string | null)[];
}

/** Union of verse numbers across columns, sorted; missing → null. */
export function alignVerses(columns: VerseMap[]): AlignedVerse[] {
  const numbers = new Set<number>();
  for (const col of columns) {
    for (const n of col.keys()) numbers.add(n);
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  return sorted.map((verse) => ({
    verse,
    texts: columns.map((col) => (col.has(verse) ? (col.get(verse) as string) : null)),
  }));
}
