// Layout tổng: <head> + header + main + footer. Mọi trang đi qua đây.
import { site, url, canonical } from '../../site.config.js';
import { header } from '../partials/header.js';
import { footer, breadcrumbs } from '../partials/footer.js';
import { mobileBar } from '../partials/cta.js';
import { localBusinessJsonLd } from '../partials/schema.js';

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * @param {{path: string, title: string, description: string, h1: string, breadcrumbLabel?: string, body: string, extraJsonLd?: object[]}} page
 */
export function renderPage(page) {
  const canonicalUrl = canonical(page.path);
  const fullTitle = page.title || `${site.name} — ${site.tagline}`;

  const ogImage = site.ogImage
    ? `\n  <meta property="og:image" content="${site.ogImage}">`
    : '';

  const crumbs = page.breadcrumbLabel
    ? `\n${breadcrumbs(page.breadcrumbLabel, page.path)}`
    : '';

  const extraLd = (page.extraJsonLd || [])
    .map((d) => `\n  <script type="application/ld+json">\n${JSON.stringify(d, null, 2)}\n  </script>`)
    .join('');

  return `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="canonical" href="${canonicalUrl}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#0b3d91">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeHtml(site.name)}">
  <meta property="og:locale" content="vi_VN">
  <meta property="og:title" content="${escapeHtml(fullTitle)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${canonicalUrl}">${ogImage}
  <meta name="twitter:card" content="summary">
  <link rel="icon" href="${url('/logo.png')}" type="image/png">
  <link rel="apple-touch-icon" href="${url('/logo.png')}">
  <link rel="stylesheet" href="${url('/styles.css')}">
  <script type="application/ld+json">
${localBusinessJsonLd()}
  </script>${extraLd}
</head>
<body>
${header(page.path)}
<main id="main">${crumbs}
${page.body}
</main>
${footer()}
${mobileBar()}
<script src="${url('/main.js')}" defer></script>
</body>
</html>
`;
}
