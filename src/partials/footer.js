// Footer + breadcrumbs.
import { site, url } from '../../site.config.js';
import { phoneList } from './cta.js';

export function footer() {
  return `<footer class="site-footer">
  <div class="container site-footer__grid">
    <div class="footer-col">
      <p class="footer-col__title">${site.name}</p>
      <p class="footer-note">${site.tagline}</p>
      <p class="footer-note">${site.province}</p>
    </div>
    <div class="footer-col">
      <p class="footer-col__title">Liên hệ</p>
      ${phoneList()}
      <p class="footer-note">Địa chỉ: <span class="todo">TODO — điền địa chỉ cửa hàng (khớp Google Business Profile)</span></p>
      <p class="footer-note">Giờ mở cửa: <span class="todo">TODO — điền giờ mở cửa xác nhận</span></p>
    </div>
    <div class="footer-col">
      <p class="footer-col__title">Dịch vụ</p>
      <ul class="footer-links">
        <li><a href="${url('/giao-gas-tan-nha/')}">Giao gas tận nhà</a></li>
        <li><a href="${url('/sua-chua-bep-gas/')}">Sửa chữa bếp gas</a></li>
        <li><a href="${url('/bep-gas-thiet-bi-gas/')}">Bếp gas và thiết bị gas</a></li>
        <li><a href="${url('/lien-he/')}">Liên hệ</a></li>
      </ul>
    </div>
  </div>
  <div class="container site-footer__bottom">
    <p>© ${new Date().getFullYear()} ${site.name}. <a href="${site.legacyWebsite}" rel="noopener">Website cũ</a></p>
    <p class="footer-note">Thông tin giá, chính sách giao hàng và khu vực giao cụ thể: liên hệ cửa hàng để xác nhận.</p>
  </div>
</footer>`;
}

/** Breadcrumb — chỉ dùng cho trang cấp 2. */
export function breadcrumbs(currentLabel, currentPath) {
  return `<nav class="breadcrumbs container" aria-label="Đường dẫn trang">
    <ol>
      <li><a href="${url('/')}">Trang chủ</a></li>
      <li><span aria-current="page">${currentLabel}</span></li>
    </ol>
  </nav>`;
}
