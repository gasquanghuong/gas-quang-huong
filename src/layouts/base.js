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

  // og:image: chuẩn hoá về URL tuyệt đối nếu config để đường dẫn tương đối.
  const ogImage = !site.ogImage
    ? ''
    : site.ogImage.startsWith('http')
      ? site.ogImage
      : canonical(site.ogImage);
  const ogImageTag = ogImage ? `\n  <meta property="og:image" content="${ogImage}">` : '';
  const twitterImageTag = ogImage ? `\n  <meta name="twitter:image" content="${ogImage}">` : '';

  const crumbs = page.breadcrumbLabel
    ? `\n${breadcrumbs(page.breadcrumbLabel, page.path)}`
    : '';

  // BreadcrumbList JSON-LD — chỉ khi trang có breadcrumbLabel (không nhân đôi).
  const breadcrumbLd = page.breadcrumbLabel
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: site.name, item: canonical('/') },
            // breadcrumbLabel trong HTML đã escape & -> khôi phục ký tự gốc cho schema
            { '@type': 'ListItem', position: 2, name: page.breadcrumbLabel.replace(/&amp;/g, '&'), item: canonicalUrl },
          ],
        },
      ]
    : [];

  const extraLd = [...breadcrumbLd, ...(page.extraJsonLd || [])]
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
  <meta property="og:url" content="${canonicalUrl}">${ogImageTag}
  <meta name="twitter:card" content="summary">${twitterImageTag}
  <link rel="icon" href="${url('/favicon.svg')}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${url('/logo.png')}">
  <link rel="stylesheet" href="${url('/styles.css')}">
  <script type="application/ld+json">
${localBusinessJsonLd()}
  </script>${extraLd}
</head>
<body>
${header(page.path)}
<main id="main" tabindex="-1">${crumbs}
${page.body}
</main>
${footer()}
${mobileBar()}
<script src="${url('/main.js')}" defer></script>
</body>
</html>
`;
}
