// Build static site: src/pages/*.js -> dist/ + sitemap.xml + copy public/.
// Zero dependency. Chạy: node build.js [--serve] [--base /ten-repo/]
import { mkdir, writeFile, readdir, copyFile, rm, cp } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import http from 'node:http';
import { readFile } from 'node:fs/promises';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');

// --base ghi đè basePath (tiện khi CI biết tên repo)
const baseFlag = process.argv.indexOf('--base');
if (baseFlag !== -1 && process.argv[baseFlag + 1]) {
  const cfg = await import(pathToFileURL(path.join(root, 'site.config.js')).href);
  // site.basePath là const object property — ghi đè trực tiếp
  cfg.site.basePath = process.argv[baseFlag + 1].endsWith('/')
    ? process.argv[baseFlag + 1]
    : process.argv[baseFlag + 1] + '/';
}
const { site, canonical, url } = await import(pathToFileURL(path.join(root, 'site.config.js')).href);

// 1. Đọc tất cả trang
const pageFiles = (await readdir(path.join(root, 'src/pages'))).filter((f) => f.endsWith('.js'));
const pages = [];
for (const f of pageFiles) {
  const mod = await import(pathToFileURL(path.join(root, 'src/pages', f)).href);
  pages.push(mod.default);
}
pages.sort((a, b) => (a.path === '/' ? -1 : b.path === '/' ? 1 : 0));

// 2. Render
const { renderPage } = await import(pathToFileURL(path.join(root, 'src/layouts/base.js')).href);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

let written = 0;
for (const page of pages) {
  const html = renderPage(page);
  const outFile =
    page.path === '/' ? path.join(dist, 'index.html') : path.join(dist, page.path, 'index.html');
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, html, 'utf8');
  written++;
}

// 3. Sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url>\n    <loc>${canonical(p.path)}</loc>\n  </url>`)
  .join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

// 4. Copy public/ (robots.txt, favicon, ảnh...) + asset tĩnh từ src/
try {
  await cp(path.join(root, 'public'), dist, { recursive: true });
} catch {
  /* chưa có public/ */
}
await copyFile(path.join(root, 'src/styles.css'), path.join(dist, 'styles.css'));
await copyFile(path.join(root, 'src/main.js'), path.join(dist, 'main.js'));
// GitHub Pages: bỏ qua Jekyll
await writeFile(path.join(dist, '.nojekyll'), '', 'utf8');

// robots.txt: điền sitemap URL động
try {
  const robotsPath = path.join(dist, 'robots.txt');
  const robots = await readFile(robotsPath, 'utf8');
  await writeFile(robotsPath, robots.replace('__SITEMAP__', canonical('/sitemap.xml')), 'utf8');
} catch {
  /* không có robots.txt */
}

console.log(`✔ Built ${written} trang -> dist/  (basePath: ${site.basePath})`);

// 5. Preview local: node build.js --serve
if (process.argv.includes('--serve')) {
  const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
  const base = site.basePath;
  http
    .createServer(async (req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/') p = base;
      if (p === base) p = base + 'index.html';
      if (!p.startsWith(base)) { res.writeHead(404); return res.end('404 — dự kiến base path ' + base); }
      const file = path.join(dist, p.slice(base.length));
      try {
        const data = await readFile(file);
        res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('404');
      }
    })
    .listen(4321, () => console.log(`▶ http://localhost:4321${base}`));
}
