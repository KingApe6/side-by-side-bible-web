# Side by Side Bible (Web)

A static web app that shows **2–4** public-domain English Bible translations in **verse-locked** columns: one shared scroll, each verse is a single row with N cells. No accounts, no backend.

Live (after GitHub Pages is enabled):  
**https://kingape6.github.io/side-by-side-bible-web/**

Companion native app: [side-by-side-bible](https://github.com/KingApe6/side-by-side-bible) (iOS). This repo is a clean web rebuild, not a wrapper.

## Features (MVP)

- **Startup picker** — choose column count (2, 3, or 4) and a translation per column. The same translation may be reused.
- **Verse-locked reader** — one scroll container; missing verses show an em dash (`—`).
- **Book & chapter** — full Protestant 66-book canon, chapter grid, previous/next chapter.
- **Change translations** later from the reader toolbar.
- **Appearance** — background/text presets and custom `#RRGGBB` hex (saved in `localStorage`).
- **About** — attribution for public-domain modules and licensed stubs.

## Translations

| ID | Name | Status |
| --- | --- | --- |
| `kjv` | King James Version (1769) | Public domain — loaded |
| `web` | World English Bible | Public domain — loaded |
| `asv` | American Standard Version (1901) | Public domain — loaded |
| `esv` | English Standard Version | Licensed stub (`enabled: false`) |
| `lsb` | Legacy Standard Bible | Licensed stub (`enabled: false`) |
| `net` | New English Translation | Licensed stub (`enabled: false`) |

**Source for PD text:** [getBible](https://getbible.net) v2 API, lazy per book:

`https://api.getbible.net/v2/{kjv|web|asv}/{bookNumber}.json`

This app **never invents** Bible text. If a request fails, the reader shows an error; empty cells use `—` only when a verse number exists in another column.

### Adding a licensed module later

Licensed translations appear in `src/data/translations.ts` with `licenseKind: 'licensed'` and `enabled: false`. They are **not** bundled and **cannot** be selected.

To add one after you obtain a publisher license:

1. Secure written permission / a redistribution license from the rights holder.
2. Host the licensed JSON (or API) yourself — do **not** scrape copyrighted sites.
3. In `src/data/translations.ts`, set `enabled: true`, add an `apiSlug` or custom loader URL that you control, and update `attribution` / `licenseNote`.
4. Extend `src/lib/bibleLoader.ts` if the payload shape differs from getBible v2.
5. Rebuild and redeploy. Keep the license text visible in About.

Until then, leave stubs disabled so the UI documents intent without shipping copyrighted text.

## Stack

- Vite + vanilla TypeScript
- No framework, no backend
- Per-book fetch + in-memory cache (browser HTTP cache / CDN also apply)

## Hosting (GitHub Pages)

**Chosen layout:** build output is committed to **`docs/`** on branch **`main`**.

- Vite `base`: `/side-by-side-bible-web/`
- Pages source: **Deploy from a branch** → `main` → **`/docs`**

See [DEPLOY.md](./DEPLOY.md) for the one-time Settings click and rebuild steps.

## Local run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/side-by-side-bible-web/`).

```bash
npm run build    # outputs to docs/
npm run preview  # serves the production build
```

## Project layout

```
index.html
vite.config.ts          # base + outDir: docs
src/
  main.ts
  style.css
  data/
    canon.ts            # 66-book Protestant canon
    translations.ts     # registry (PD + licensed stubs)
  lib/
    bibleLoader.ts      # getBible per-book lazy load
    verseAlign.ts       # union of verse numbers
    storage.ts          # localStorage prefs
    appearance.ts       # presets + hex
  ui/
    app.ts              # screens: picker, reader, book, appearance, about
docs/                   # GitHub Pages site (build output)
README.md
DEPLOY.md
```

## Out of scope

Search, bookmarks, notes, audio, accounts, monetization, and shipping any copyrighted full text.

## License

App source in this repository is provided as-is for the project owner.

Bible texts remain under their respective public-domain or upstream module terms. Licensed abbreviations listed as stubs are trademarks/property of their publishers and are not redistributed here.
