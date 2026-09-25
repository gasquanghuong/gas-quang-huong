// Header + điều hướng. Số nút CTA lấy từ site.config.js.
import { site, url } from '../../site.config.js';
import { callBtn } from './cta.js';

export const navItems = [
  { href: '/', label: 'Trang chủ' },
  { href: '/giao-gas-tan-nha/', label: 'Giao gas tận nhà' },
  { href: '/sua-chua-bep-gas/', label: 'Sửa chữa bếp gas' },
  { href: '/bep-gas-thiet-bi-gas/', label: 'Bếp gas &amp; thiết bị gas' },
  { href: '/lien-he/', label: 'Liên hệ' },
];

export function header(current = '/') {
  const links = navItems
    .map((n) => `<li><a class="nav__link${n.href === current ? ' is-active' : ''}" href="${url(n.href)}"${n.href === current ? ' aria-current="page"' : ''}>${n.label}</a></li>`)
    .join('');

  return `<a class="skip-link" href="#main">Bỏ qua điều hướng</a>
<header class="site-header">
  <div class="container site-header__inner">
    <a class="logo" href="${url('/')}" aria-label="${site.name} — trang chủ">
      <img class="logo__mark" src="${url('/logo.png')}" alt="" width="40" height="40">
      <span class="logo__text"><strong>Gas</strong> Quang Hương</span>
    </a>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Mở menu">☰</button>
    <nav class="nav" id="site-nav" aria-label="Điều hướng chính">
      <ul class="nav__list">${links}</ul>
      ${callBtn('Gọi đặt gas', { cls: 'btn btn--primary header-cta' })}
    </nav>
  </div>
</header>`;
}
