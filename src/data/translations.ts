/**
 * Translation registry.
 * Public-domain modules (KJV, WEB, ASV) load from getBible v2.
 * Licensed stubs (ESV, LSB, NET) are listed but not loadable.
 */

export type LicenseKind = 'public-domain' | 'licensed';

export interface TranslationMeta {
  id: string;
  abbreviation: string;
  displayName: string;
  yearNote: string;
  licenseKind: LicenseKind;
  /** When false, UI shows the option as unavailable (licensed stub). */
  enabled: boolean;
  /** getBible path segment, e.g. "kjv". Only for enabled PD modules. */
  apiSlug?: string;
  attribution: string;
  licenseNote?: string;
}

export const TRANSLATIONS: TranslationMeta[] = [
  {
    id: 'kjv',
    abbreviation: 'KJV',
    displayName: 'King James Version',
    yearNote: '1769 (public domain)',
    licenseKind: 'public-domain',
    enabled: true,
    apiSlug: 'kjv',
    attribution:
      'King James Version (1769). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules).',
  },
  {
    id: 'web',
    abbreviation: 'WEB',
    displayName: 'World English Bible',
    yearNote: 'public domain',
    licenseKind: 'public-domain',
    enabled: true,
    apiSlug: 'web',
    attribution:
      'World English Bible (WEB). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules).',
  },
  {
    id: 'asv',
    abbreviation: 'ASV',
    displayName: 'American Standard Version',
    yearNote: '1901 (public domain)',
    licenseKind: 'public-domain',
    enabled: true,
    apiSlug: 'asv',
    attribution:
      'American Standard Version (1901). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules).',
  },
  {
    id: 'esv',
    abbreviation: 'ESV',
    displayName: 'English Standard Version',
    yearNote: 'licensed — not bundled',
    licenseKind: 'licensed',
    enabled: false,
    attribution: 'English Standard Version®. Copyright © Crossway Bibles.',
    licenseNote:
      'Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules.',
  },
  {
    id: 'lsb',
    abbreviation: 'LSB',
    displayName: 'Legacy Standard Bible',
    yearNote: 'licensed — not bundled',
    licenseKind: 'licensed',
    enabled: false,
    attribution: 'Legacy Standard Bible®. Copyright © Lockman Foundation / Three Sixteen Publishing.',
    licenseNote:
      'Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules.',
  },
  {
    id: 'net',
    abbreviation: 'NET',
    displayName: 'New English Translation',
    yearNote: 'licensed — not bundled',
    licenseKind: 'licensed',
    enabled: false,
    attribution: 'NET Bible®. Copyright © Biblical Studies Press, L.L.C.',
    licenseNote:
      'Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules.',
  },
];

export function getTranslation(id: string): TranslationMeta | undefined {
  return TRANSLATIONS.find((t) => t.id === id);
}

export function enabledTranslations(): TranslationMeta[] {
  return TRANSLATIONS.filter((t) => t.enabled);
}

export const DEFAULT_COLUMN_IDS = ['kjv', 'web'] as const;
