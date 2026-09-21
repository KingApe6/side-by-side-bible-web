export interface Swatch {
  id: string;
  label: string;
  /** Empty string = system default. */
  hex: string;
}

export const BACKGROUND_PRESETS: Swatch[] = [
  { id: 'bg-system', label: 'System', hex: '' },
  { id: 'bg-white', label: 'White', hex: '#FFFFFF' },
  { id: 'bg-cream', label: 'Paper', hex: '#F7F1E3' },
  { id: 'bg-gray', label: 'Light gray', hex: '#E8E8E8' },
  { id: 'bg-sepia', label: 'Sepia', hex: '#F4ECD8' },
  { id: 'bg-dark', label: 'Dark gray', hex: '#2C2C2E' },
  { id: 'bg-black', label: 'Black', hex: '#000000' },
];

export const TEXT_PRESETS: Swatch[] = [
  { id: 'tx-system', label: 'System', hex: '' },
  { id: 'tx-black', label: 'Black', hex: '#000000' },
  { id: 'tx-dark', label: 'Dark gray', hex: '#3A3A3C' },
  { id: 'tx-sepia', label: 'Sepia brown', hex: '#5C4033' },
  { id: 'tx-white', label: 'White', hex: '#FFFFFF' },
  { id: 'tx-soft', label: 'Soft white', hex: '#F2F2F7' },
];

const HEX_RE = /^#([0-9A-Fa-f]{6})$/;

export function isValidHex(hex: string): boolean {
  return hex === '' || HEX_RE.test(hex);
}

export function normalizeHex(input: string): string | null {
  const trimmed = input.trim();
  if (trimmed === '') return '';
  const withHash = trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
  if (!HEX_RE.test(withHash)) return null;
  return withHash.toUpperCase();
}


/** Native <input type="color"> requires #RRGGBB; use fallback when system/empty. */
export function colorInputValue(hex: string, fallback: string): string {
  if (HEX_RE.test(hex)) return hex.toUpperCase();
  return fallback.toUpperCase();
}

export function applyAppearance(backgroundHex: string, textHex: string): void {
  const root = document.documentElement;
  if (backgroundHex) {
    root.style.setProperty('--reader-bg', backgroundHex);
  } else {
    root.style.removeProperty('--reader-bg');
  }
  if (textHex) {
    root.style.setProperty('--reader-fg', textHex);
  } else {
    root.style.removeProperty('--reader-fg');
  }
}
