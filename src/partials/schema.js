// JSON-LD LocalBusiness — CHỈ dùng dữ liệu đã xác nhận trong site.config.js.
// Không thêm giá, rating, review khi chưa có dữ liệu xác nhận.
import { site, canonical } from '../../site.config.js';

/**
 * Tách site.address đã xác nhận thành PostalAddress (cơ học, không bịa thêm).
 * '147 Trần Hưng Đạo, Krông Pắc, Đắk Lắk 632700'
 *   -> street / locality / region / postalCode / country.
 * Nếu chuỗi không đúng cấu trúc 3+ phần -> trả về chuỗi gốc (fallback).
 */
function postalAddress(address) {
  const parts = address.split(',').map((s) => s.trim()).filter(Boolean);
  if (parts.length < 3) return address;
  const tail = parts.pop(); // 'Đắk Lắk 632700'
  const postalCode = (tail.match(/\d+/) || [''])[0];
  const addressRegion = postalCode ? tail.replace(postalCode, '').trim() : tail;
  return {
    '@type': 'PostalAddress',
    streetAddress: parts[0],
    addressLocality: parts.slice(1).join(', '),
    ...(addressRegion ? { addressRegion } : {}),
    ...(postalCode ? { postalCode } : {}),
    addressCountry: 'VN',
  };
}

export function localBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    '@id': canonical('/'),
    name: site.name,
    url: canonical('/'),
    telephone: site.phones.map((p) => `+84${p.tel.slice(1)}`),
    description: `${site.name} — đại lý gas, giao gas tận nhà, sửa chữa bếp gas và bán bếp gas, thiết bị gas tại ${site.province}.`,
    areaServed: { '@type': 'Place', name: site.province },
    // TODO(còn thiếu, thêm khi chủ cửa hàng xác nhận): image, priceRange, sameAs
  };

  if (site.address) data.address = postalAddress(site.address);
  // Giờ chỉ ghi trong HTML hiển thị; schema dùng openingHoursSpecification.
  if (site.openingHours) {
    data.openingHoursSpecification = [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        opens: '00:00',
        closes: '23:59',
      },
    ];
  }
  if (site.googleMapsUrl) data.hasMap = site.googleMapsUrl;
  if (site.latitude != null && site.longitude != null) {
    data.geo = { '@type': 'GeoCoordinates', latitude: site.latitude, longitude: site.longitude };
  }
  if (site.ogImage) data.image = site.ogImage;
  // KHÔNG thêm aggregateRating / review — schema đánh giá giả vi phạm chính sách Google.

  return JSON.stringify(data, null, 2);
}
