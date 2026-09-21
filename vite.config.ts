import { defineConfig } from 'vite';

// GitHub Pages project site: https://kingape6.github.io/side-by-side-bible-web/
// Built assets are committed under docs/ and served from main branch /docs.
export default defineConfig({
  base: '/side-by-side-bible-web/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
