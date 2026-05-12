// Prepares the Angular build output for GitHub Pages:
//  - copies index.html -> 404.html so SPA routes survive a hard refresh
//  - adds a .nojekyll file so GitHub Pages does not strip files starting with "_"
const fs = require('node:fs');
const path = require('node:path');

const outDir = path.resolve(__dirname, '..', 'dist', 'travel-landing', 'browser');

if (!fs.existsSync(outDir)) {
  console.error(`[prepare-gh-pages] Build output not found at: ${outDir}`);
  process.exit(1);
}

const indexHtml = path.join(outDir, 'index.html');
const notFoundHtml = path.join(outDir, '404.html');
fs.copyFileSync(indexHtml, notFoundHtml);
console.log(`[prepare-gh-pages] Copied index.html -> 404.html`);

const nojekyll = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyll, '');
console.log(`[prepare-gh-pages] Wrote .nojekyll`);
