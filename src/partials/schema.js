// JSON-LD LocalBusiness — CHỈ dùng dữ liệu đã xác nhận trong site.config.js.
// Không thêm địa chỉ, tọa độ, giờ mở cửa, giá, rating, review khi chưa có.
import { site, canonical } from '../../site.config.js';

export function localBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    name: site.name,
    url: canonical('/'),
    telephone: site.phones.map((p) => `+84${p.tel.slice(1)}`),
    description: `${site.name} — đại lý gas, giao gas tận nhà, sửa chữa bếp gas và bán bếp gas, thiết bị gas tại ${site.province}.`,
    areaServed: { '@type': 'Place', name: site.province },
    // TODO: chỉ thêm các trường sau khi chủ cửa hàng xác nhận dữ liệu:
    // address, geo, openingHoursSpecification, image, priceRange, sameAs
  };

  if (site.address) data.address = site.address; // TODO: chuyển sang PostalAddress chi tiết khi có địa chỉ đầy đủ
  if (site.openingHours) data.openingHours = site.openingHours;
  if (site.latitude != null && site.longitude != null) {
    data.geo = { '@type': 'GeoCoordinates', latitude: site.latitude, longitude: site.longitude };
  }
  if (site.ogImage) data.image = site.ogImage;
  // KHÔNG thêm aggregateRating / review — schema đánh giá giả vi phạm chính sách Google.

  return JSON.stringify(data, null, 2);
}
