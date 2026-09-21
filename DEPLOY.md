# Deploy: GitHub Pages

This project publishes a static site from the **`docs/`** folder on **`main`**.

## One-time: enable Pages

1. Open **https://github.com/KingApe6/side-by-side-bible-web/settings/pages**
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/docs`
3. Click **Save**.
4. Wait a minute, then visit:

   **https://kingape6.github.io/side-by-side-bible-web/**

If the site 404s, confirm the Actions / Pages deploy finished and that `docs/index.html` exists on `main`.

## Rebuild and publish updates

```bash
npm install
npm run build
git add docs
git commit -m "Build site for GitHub Pages"
git push origin main
```

`vite.config.ts` sets:

- `base: '/side-by-side-bible-web/'` (required for project Pages URLs)
- `build.outDir: 'docs'`

Do **not** change `base` to `/` unless you move the site to a user/org root domain.

## Optional: custom domain

In the same Pages settings, set a custom domain and update `base` in `vite.config.ts` (often `/` for an apex/root site), rebuild, and push `docs/`.

## CORS note

Scripture is loaded live from `https://api.getbible.net` (CORS allowed). Readers need network access for first load of each book; subsequent visits benefit from browser/CDN caching.
