// Component CTA tái sử dụng: nút gọi điện, danh sách số, thanh CTA mobile, nút bản đồ.
import { site, url } from '../../site.config.js';

export const primaryPhone = site.phones[0];

/** Nút gọi điện (mặc định số đầu tiên). Đổi số thứ tự trong site.config.js. */
export function callBtn(label = 'Gọi đặt gas', { cls = 'btn btn--primary', phone = primaryPhone } = {}) {
  return `<a class="${cls}" href="tel:${phone.tel}" data-cta="call">${label}<span class="btn__sub">${phone.display}</span></a>`;
}

/** Nút gọi điện cho số cụ thể (dùng ở trang liên hệ). */
export function phoneLink(phone, cls = 'phone-link') {
  return `<a class="${cls}" href="tel:${phone.tel}"><span class="phone-link__icon" aria-hidden="true">📞</span>${phone.display}</a>`;
}

/** Danh sách số điện thoại (footer / trang liên hệ). */
export function phoneList(cls = 'phone-list') {
  return `<ul class="${cls}">${site.phones.map((p) => `<li>${phoneLink(p)}</li>`).join('')}</ul>`;
}

/**
 * Nút mở Google Maps.
 * TODO: điền site.googleMapsUrl trong site.config.js (lấy từ Google Business Profile).
 * Khi chưa có, nút chuyển về trang Liên hệ (không tự bịa tọa độ/địa điểm).
 */
export function mapsBtn(label = 'Xem bản đồ', { cls = 'btn btn--outline' } = {}) {
  if (site.googleMapsUrl) {
    return `<a class="${cls}" href="${site.googleMapsUrl}" target="_blank" rel="noopener noreferrer" data-cta="map">${label}</a>`;
  }
  return `<a class="${cls}" href="${url('/lien-he/#ban-do')}" data-cta="map">${label}<span class="btn__note"> (bản đồ đang cập nhật)</span></a>`;
}

/** Thanh CTA cố định dưới cùng cho điện thoại. */
export function mobileBar() {
  return `<div class="mobile-bar" role="region" aria-label="Liên hệ nhanh">
    <a class="mobile-bar__call" href="tel:${primaryPhone.tel}" data-cta="call">Gọi ngay</a>
    ${mapsBtn('Xem bản đồ', { cls: 'mobile-bar__map' })}
  </div>`;
}
