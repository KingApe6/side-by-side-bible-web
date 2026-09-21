import { PROTESTANT_CANON, getCanonBook } from '../data/canon';
import {
  TRANSLATIONS,
  enabledTranslations,
  getTranslation,
} from '../data/translations';
import {
  loadPreferences,
  saveAppearance,
  saveColumns,
  saveLocation,
  type AppPreferences,
} from '../lib/storage';
import { loadChapterForColumns } from '../lib/bibleLoader';
import { alignVerses } from '../lib/verseAlign';
import {
  BACKGROUND_PRESETS,
  TEXT_PRESETS,
  applyAppearance,
  normalizeHex,
  colorInputValue,
} from '../lib/appearance';

type Screen = 'picker' | 'reader' | 'book' | 'appearance' | 'about' | 'change-translations';

export class App {
  private root: HTMLElement;
  private prefs: AppPreferences;
  private screen: Screen = 'picker';
  private loading = false;
  private error: string | null = null;
  private aligned: ReturnType<typeof alignVerses> = [];
  /** Draft selections while on picker / change-translations */
  private draftCount: 2 | 3 | 4 = 2;
  private draftIds: string[] = ['kjv', 'web'];

  constructor(root: HTMLElement) {
    this.root = root;
    this.prefs = loadPreferences();
    this.draftCount = this.prefs.columnCount;
    this.draftIds = [...this.prefs.columnIds];
    applyAppearance(this.prefs.backgroundHex, this.prefs.textHex);
    this.screen = this.prefs.setupDone ? 'reader' : 'picker';
    if (this.screen === 'reader') {
      void this.loadAndRender();
    } else {
      this.render();
    }
  }

  private setScreen(screen: Screen): void {
    this.screen = screen;
    if (screen === 'picker' || screen === 'change-translations') {
      this.draftCount = this.prefs.columnCount;
      this.draftIds = [...this.prefs.columnIds];
      while (this.draftIds.length < this.draftCount) {
        this.draftIds.push(enabledTranslations()[0]?.id ?? 'kjv');
      }
      this.draftIds = this.draftIds.slice(0, this.draftCount);
    }
    this.render();
  }

  private async loadAndRender(): Promise<void> {
    this.loading = true;
    this.error = null;
    this.render();
    try {
      const book = getCanonBook(this.prefs.bookNumber);
      if (!book) throw new Error('Unknown book.');
      if (this.prefs.chapter > book.chapterCount) {
        this.prefs.chapter = 1;
        saveLocation(this.prefs.bookNumber, this.prefs.chapter);
      }
      const maps = await loadChapterForColumns(
        this.prefs.columnIds,
        this.prefs.bookNumber,
        this.prefs.chapter,
      );
      this.aligned = alignVerses(maps);
    } catch (e) {
      this.error = e instanceof Error ? e.message : 'Could not load chapter.';
      this.aligned = [];
    } finally {
      this.loading = false;
      this.render();
    }
  }

  private commitDraft(andOpenReader: boolean): void {
    const ids = this.draftIds.slice(0, this.draftCount);
    if (ids.length !== this.draftCount || ids.some((id) => !getTranslation(id)?.enabled)) {
      return;
    }
    saveColumns(ids, this.draftCount);
    this.prefs.columnIds = ids;
    this.prefs.columnCount = this.draftCount;
    this.prefs.setupDone = true;
    if (andOpenReader) {
      this.screen = 'reader';
      void this.loadAndRender();
    } else {
      this.screen = 'reader';
      void this.loadAndRender();
    }
  }

  private goPrevChapter(): void {
    const book = getCanonBook(this.prefs.bookNumber);
    if (!book) return;
    if (this.prefs.chapter > 1) {
      this.prefs.chapter -= 1;
    } else if (this.prefs.bookNumber > 1) {
      this.prefs.bookNumber -= 1;
      const prev = getCanonBook(this.prefs.bookNumber)!;
      this.prefs.chapter = prev.chapterCount;
    } else {
      return;
    }
    saveLocation(this.prefs.bookNumber, this.prefs.chapter);
    void this.loadAndRender();
  }

  private goNextChapter(): void {
    const book = getCanonBook(this.prefs.bookNumber);
    if (!book) return;
    if (this.prefs.chapter < book.chapterCount) {
      this.prefs.chapter += 1;
    } else if (this.prefs.bookNumber < 66) {
      this.prefs.bookNumber += 1;
      this.prefs.chapter = 1;
    } else {
      return;
    }
    saveLocation(this.prefs.bookNumber, this.prefs.chapter);
    void this.loadAndRender();
  }

  private render(): void {
    switch (this.screen) {
      case 'picker':
      case 'change-translations':
        this.root.innerHTML = this.renderPicker(this.screen === 'picker');
        this.bindPicker();
        break;
      case 'reader':
        this.root.innerHTML = this.renderReader();
        this.bindReader();
        break;
      case 'book':
        this.root.innerHTML = this.renderBookPicker();
        this.bindBookPicker();
        break;
      case 'appearance':
        this.root.innerHTML = this.renderAppearance();
        this.bindAppearance();
        break;
      case 'about':
        this.root.innerHTML = this.renderAbout();
        this.bindAbout();
        break;
    }
  }

  /* ---------- Picker ---------- */

  private renderPicker(isStartup: boolean): string {
    const enabled = enabledTranslations();
    const licensed = TRANSLATIONS.filter((t) => !t.enabled);
    const cols = Array.from({ length: this.draftCount }, (_, i) => i);
    return `
      <div class="screen picker-screen">
        <header class="screen-header">
          ${isStartup ? '' : `<button type="button" class="btn ghost" data-action="back-reader" aria-label="Back">← Back</button>`}
          <h1>${isStartup ? 'Side by Side Bible' : 'Change Translations'}</h1>
        </header>
        <p class="lede">
          Choose ${this.draftCount} columns of public-domain translations.
          The same translation may be used more than once. Verses stay locked in one scroll.
        </p>
        <fieldset class="count-fieldset">
          <legend>Columns</legend>
          <div class="segmented" role="group" aria-label="Column count">
            ${[2, 3, 4]
              .map(
                (n) => `
              <button type="button" class="seg ${this.draftCount === n ? 'active' : ''}" data-count="${n}">${n}</button>
            `,
              )
              .join('')}
          </div>
        </fieldset>
        <div class="column-picks">
          ${cols
            .map(
              (i) => `
            <section class="pick-card">
              <h2>Column ${i + 1}</h2>
              <div class="radio-list" role="radiogroup" aria-label="Column ${i + 1} translation">
                ${enabled
                  .map(
                    (t) => `
                  <label class="radio-row">
                    <input type="radio" name="col-${i}" value="${t.id}" ${this.draftIds[i] === t.id ? 'checked' : ''} />
                    <span class="radio-body">
                      <strong>${t.abbreviation}</strong>
                      <span>${t.displayName}</span>
                      <em>${t.yearNote}</em>
                    </span>
                  </label>
                `,
                  )
                  .join('')}
              </div>
            </section>
          `,
            )
            .join('')}
        </div>
        <details class="licensed-stubs">
          <summary>Licensed translations (not available yet)</summary>
          <ul>
            ${licensed
              .map(
                (t) => `
              <li>
                <strong>${t.abbreviation}</strong> — ${t.displayName}
                <span class="muted">${t.licenseNote ?? ''}</span>
              </li>
            `,
              )
              .join('')}
          </ul>
        </details>
        <div class="picker-actions">
          <button type="button" class="btn primary" data-action="commit" ${this.canCommit() ? '' : 'disabled'}>
            ${isStartup ? 'Open Reader' : 'Apply &amp; Return'}
          </button>
        </div>
      </div>
    `;
  }

  private canCommit(): boolean {
    return (
      this.draftIds.length === this.draftCount &&
      this.draftIds.every((id) => !!getTranslation(id)?.enabled)
    );
  }

  private bindPicker(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-count]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const n = Number(btn.dataset.count) as 2 | 3 | 4;
        this.draftCount = n;
        while (this.draftIds.length < n) {
          this.draftIds.push(enabledTranslations()[0]?.id ?? 'kjv');
        }
        this.draftIds = this.draftIds.slice(0, n);
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLInputElement>('input[type="radio"]').forEach((input) => {
      input.addEventListener('change', () => {
        const match = /^col-(\d+)$/.exec(input.name);
        if (!match) return;
        const idx = Number(match[1]);
        this.draftIds[idx] = input.value;
        const commitBtn = this.root.querySelector<HTMLButtonElement>('[data-action="commit"]');
        if (commitBtn) commitBtn.disabled = !this.canCommit();
      });
    });
    this.root.querySelector('[data-action="commit"]')?.addEventListener('click', () => {
      this.commitDraft(true);
    });
    this.root.querySelector('[data-action="back-reader"]')?.addEventListener('click', () => {
      this.setScreen('reader');
      void this.loadAndRender();
    });
  }

  /* ---------- Reader ---------- */

  private renderReader(): string {
    const book = getCanonBook(this.prefs.bookNumber);
    const labels = this.prefs.columnIds.map((id) => getTranslation(id)?.abbreviation ?? id);
    const n = this.prefs.columnCount;
    return `
      <div class="screen reader-screen" style="--cols: ${n}">
        <header class="reader-toolbar">
          <div class="toolbar-left">
            <button type="button" class="btn ghost" data-action="prev" aria-label="Previous chapter">‹</button>
            <button type="button" class="btn location" data-action="pick-book">
              ${book?.name ?? 'Book'} ${this.prefs.chapter}
            </button>
            <button type="button" class="btn ghost" data-action="next" aria-label="Next chapter">›</button>
          </div>
          <div class="toolbar-right">
            <button type="button" class="btn ghost" data-action="change-tr" title="Translations">Aa⇄</button>
            <button type="button" class="btn ghost" data-action="appearance" title="Appearance">◐</button>
            <button type="button" class="btn ghost" data-action="about" title="About">ⓘ</button>
          </div>
        </header>
        <div class="col-headers" aria-hidden="true">
          <span class="verse-num-spacer"></span>
          ${labels.map((l) => `<span class="col-header">${l}</span>`).join('')}
        </div>
        <div class="reader-scroll" role="region" aria-label="Chapter text">
          ${
            this.loading
              ? `<p class="status">Loading chapter…</p>`
              : this.error
                ? `<p class="status error">${escapeHtml(this.error)}</p>`
                : this.aligned.length === 0
                  ? `<p class="status">No verses found for this chapter.</p>`
                  : this.aligned
                      .map(
                        (row) => `
              <div class="verse-row">
                <span class="verse-num">${row.verse}</span>
                ${row.texts
                  .map(
                    (t) => `
                  <div class="verse-cell">${t == null ? '<span class="missing">—</span>' : escapeHtml(t)}</div>
                `,
                  )
                  .join('')}
              </div>
            `,
                      )
                      .join('')
          }
        </div>
      </div>
    `;
  }

  private bindReader(): void {
    this.root.querySelector('[data-action="prev"]')?.addEventListener('click', () => this.goPrevChapter());
    this.root.querySelector('[data-action="next"]')?.addEventListener('click', () => this.goNextChapter());
    this.root.querySelector('[data-action="pick-book"]')?.addEventListener('click', () => this.setScreen('book'));
    this.root.querySelector('[data-action="change-tr"]')?.addEventListener('click', () =>
      this.setScreen('change-translations'),
    );
    this.root.querySelector('[data-action="appearance"]')?.addEventListener('click', () =>
      this.setScreen('appearance'),
    );
    this.root.querySelector('[data-action="about"]')?.addEventListener('click', () => this.setScreen('about'));
  }

  /* ---------- Book / chapter picker ---------- */

  private renderBookPicker(): string {
    const selected = getCanonBook(this.prefs.bookNumber);
    const ot = PROTESTANT_CANON.filter((b) => b.number <= 39);
    const nt = PROTESTANT_CANON.filter((b) => b.number >= 40);
    return `
      <div class="screen book-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>Book &amp; Chapter</h1>
        </header>
        <div class="book-layout">
          <div class="book-lists">
            <section>
              <h2>Old Testament</h2>
              <div class="book-grid">
                ${ot.map((b) => bookButton(b.number, b.name, this.prefs.bookNumber)).join('')}
              </div>
            </section>
            <section>
              <h2>New Testament</h2>
              <div class="book-grid">
                ${nt.map((b) => bookButton(b.number, b.name, this.prefs.bookNumber)).join('')}
              </div>
            </section>
          </div>
          <div class="chapter-panel">
            <h2>${selected?.name ?? ''} — chapters</h2>
            <div class="chapter-grid">
              ${
                selected
                  ? Array.from({ length: selected.chapterCount }, (_, i) => i + 1)
                      .map(
                        (ch) => `
                  <button type="button" class="chip ${ch === this.prefs.chapter ? 'active' : ''}" data-chapter="${ch}">${ch}</button>
                `,
                      )
                      .join('')
                  : ''
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private bindBookPicker(): void {
    this.root.querySelector('[data-action="back-reader"]')?.addEventListener('click', () => {
      this.setScreen('reader');
      void this.loadAndRender();
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-book]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.prefs.bookNumber = Number(btn.dataset.book);
        this.prefs.chapter = 1;
        this.render();
        this.bindBookPicker();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-chapter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.prefs.chapter = Number(btn.dataset.chapter);
        saveLocation(this.prefs.bookNumber, this.prefs.chapter);
        this.screen = 'reader';
        void this.loadAndRender();
      });
    });
  }

  /* ---------- Appearance ---------- */

  private renderAppearance(): string {
    const bg = this.prefs.backgroundHex;
    const fg = this.prefs.textHex;
    const bgPicker = colorInputValue(bg, '#FFFFFF');
    const fgPicker = colorInputValue(fg, '#000000');
    return `
      <div class="screen appearance-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>Appearance</h1>
        </header>
        <section class="appear-block">
          <h2>Background</h2>
          <div class="swatches">
            ${BACKGROUND_PRESETS.map(
              (s) => `
              <button type="button" class="swatch ${bg === s.hex ? 'active' : ''}" data-bg="${s.hex}" title="${s.label}">
                <span class="swatch-chip" style="${s.hex ? `background:${s.hex}` : ''}"></span>
                ${s.label}
              </button>
            `,
            ).join('')}
          </div>
          <div class="color-row">
            <label class="color-pick">
              <span>Pick a color</span>
              <input type="color" id="bg-color" value="${escapeAttr(bgPicker)}" title="Background color" />
            </label>
            <label class="hex-field">
              <span>Hex <span class="muted">(optional)</span></span>
              <input type="text" id="bg-hex" value="${escapeAttr(bg)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
            </label>
          </div>
        </section>
        <section class="appear-block">
          <h2>Text</h2>
          <div class="swatches">
            ${TEXT_PRESETS.map(
              (s) => `
              <button type="button" class="swatch ${fg === s.hex ? 'active' : ''}" data-fg="${s.hex}" title="${s.label}">
                <span class="swatch-chip text-chip" style="${s.hex ? `background:${s.hex}` : ''}"></span>
                ${s.label}
              </button>
            `,
            ).join('')}
          </div>
          <div class="color-row">
            <label class="color-pick">
              <span>Pick a color</span>
              <input type="color" id="fg-color" value="${escapeAttr(fgPicker)}" title="Text color" />
            </label>
            <label class="hex-field">
              <span>Hex <span class="muted">(optional)</span></span>
              <input type="text" id="fg-hex" value="${escapeAttr(fg)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
            </label>
          </div>
        </section>
        <div class="preview-card">
          <p class="preview-label">Preview</p>
          <p class="preview-sample">In the beginning God created the heaven and the earth.</p>
        </div>
        <p class="muted tip">Choices are saved in this browser (localStorage).</p>
      </div>
    `;
  }

  private bindAppearance(): void {
    const persist = (): void => {
      saveAppearance(this.prefs.backgroundHex, this.prefs.textHex);
      applyAppearance(this.prefs.backgroundHex, this.prefs.textHex);
    };

    /** Apply color without full re-render (keeps native color picker open while dragging). */
    const applyLive = (which: 'bg' | 'fg', hex: string): void => {
      if (which === 'bg') {
        this.prefs.backgroundHex = hex;
        const hexEl = this.root.querySelector<HTMLInputElement>('#bg-hex');
        const colorEl = this.root.querySelector<HTMLInputElement>('#bg-color');
        if (hexEl) hexEl.value = hex;
        if (colorEl) colorEl.value = colorInputValue(hex, '#FFFFFF');
      } else {
        this.prefs.textHex = hex;
        const hexEl = this.root.querySelector<HTMLInputElement>('#fg-hex');
        const colorEl = this.root.querySelector<HTMLInputElement>('#fg-color');
        if (hexEl) hexEl.value = hex;
        if (colorEl) colorEl.value = colorInputValue(hex, '#000000');
      }
      persist();
    };

    const refresh = (): void => {
      this.render();
      this.bindAppearance();
    };

    this.root.querySelector('[data-action="back-reader"]')?.addEventListener('click', () => {
      this.setScreen('reader');
      void this.loadAndRender();
    });

    this.root.querySelectorAll<HTMLButtonElement>('[data-bg]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.prefs.backgroundHex = btn.dataset.bg ?? '';
        persist();
        refresh();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-fg]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.prefs.textHex = btn.dataset.fg ?? '';
        persist();
        refresh();
      });
    });

    const bgColor = this.root.querySelector<HTMLInputElement>('#bg-color');
    const fgColor = this.root.querySelector<HTMLInputElement>('#fg-color');
    const bgInput = this.root.querySelector<HTMLInputElement>('#bg-hex');
    const fgInput = this.root.querySelector<HTMLInputElement>('#fg-hex');

    bgColor?.addEventListener('input', () => {
      applyLive('bg', bgColor.value.toUpperCase());
    });
    bgColor?.addEventListener('change', () => {
      refresh();
    });
    fgColor?.addEventListener('input', () => {
      applyLive('fg', fgColor.value.toUpperCase());
    });
    fgColor?.addEventListener('change', () => {
      refresh();
    });

    bgInput?.addEventListener('change', () => {
      const n = normalizeHex(bgInput.value);
      if (n === null) {
        bgInput.value = this.prefs.backgroundHex;
        return;
      }
      this.prefs.backgroundHex = n;
      persist();
      refresh();
    });
    fgInput?.addEventListener('change', () => {
      const n = normalizeHex(fgInput.value);
      if (n === null) {
        fgInput.value = this.prefs.textHex;
        return;
      }
      this.prefs.textHex = n;
      persist();
      refresh();
    });
  }

  /* ---------- About ---------- */

  private renderAbout(): string {
    const pd = enabledTranslations();
    const licensed = TRANSLATIONS.filter((t) => !t.enabled);
    return `
      <div class="screen about-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>About</h1>
        </header>
        <article class="about-body">
          <p>
            <strong>Side by Side Bible</strong> lets you read two to four English Bible translations
            in verse-locked columns. One scroll keeps every verse aligned across columns.
          </p>
          <h2>Public-domain texts</h2>
          <ul>
            ${pd
              .map(
                (t) => `
              <li><strong>${t.abbreviation}</strong> — ${t.attribution}</li>
            `,
              )
              .join('')}
          </ul>
          <p>
            Text is fetched per book from
            <a href="https://getbible.net" target="_blank" rel="noopener noreferrer">getBible</a>
            v2 (<code>api.getbible.net/v2</code>). Verse wording is never invented by this app.
          </p>
          <h2>Licensed (not bundled)</h2>
          <ul>
            ${licensed
              .map(
                (t) => `
              <li><strong>${t.abbreviation}</strong> — ${t.attribution} ${t.licenseNote ?? ''}</li>
            `,
              )
              .join('')}
          </ul>
          <p class="muted">
            No accounts, no backend, no search, bookmarks, notes, or audio in this MVP.
            Companion iOS app: Side by Side Bible (separate repository).
          </p>
        </article>
      </div>
    `;
  }

  private bindAbout(): void {
    this.root.querySelector('[data-action="back-reader"]')?.addEventListener('click', () => {
      this.setScreen('reader');
      void this.loadAndRender();
    });
  }
}

function bookButton(number: number, name: string, selected: number): string {
  return `<button type="button" class="book-btn ${number === selected ? 'active' : ''}" data-book="${number}">${escapeHtml(name)}</button>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(s: string): string {
  return escapeHtml(s);
}
