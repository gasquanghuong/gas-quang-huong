// ============================================================
// CẤU HÌNH DUY NHẤT CỦA WEBSITE — sửa thông tin doanh nghiệp ở đây.
// Mọi trang, sitemap, canonical, JSON-LD đều lấy dữ liệu từ file này.
// ============================================================

export const site = {
  // Tên doanh nghiệp — PHẢI khớp với Google Business Profile (NAP consistency)
  name: 'Đại lý Gas Quang Hương',
  shortName: 'Gas Quang Hương',
  tagline: 'Đại lý gas · Giao gas tận nhà · Sửa chữa bếp gas',

  // ------------------------------------------------------------
  // TODO(trước khi deploy): thay 2 dòng dưới bằng tên thật.
  // Ví dụ: siteUrl = 'https://user.github.io'  basePath = '/gas-quang-huong/'
  // ------------------------------------------------------------
  siteUrl: 'https://gasquanghuong.github.io',
  basePath: '/gas-quang-huong/',

  // Số điện thoại — chỉ gồm số đã cung cấp, không tự thêm số khác.
  phones: [
    { display: '0984 998 189', tel: '0984998189', note: '' },
    { display: '0984 024 924', tel: '0984024924', note: '' },
    { display: '0943 705 705', tel: '0943705705', note: '' },
  ],

  // Website hiện tại (liên kết ngoài đã xác nhận)
  legacyWebsite: 'https://quanghuongdaklak.giucban.vn/',

  // Khu vực cấp tỉnh đã xác nhận (dùng cho nội dung, KHÔNG tự thêm quận/huyện/phường)
  province: 'Đắk Lắk',

  // ------------------------------------------------------------
  // TODO(chưa có dữ liệu — để trống, KHÔNG tự bịa):
  // ------------------------------------------------------------
  address: '',        // Ví dụ khi có: '123 XYZ, tỉnh Đắk Lák' — chỉ ghi khi chủ cửa hàng xác nhận
  openingHours: '',   // Ví dụ khi có: 'Thứ 2 - Chủ nhật: 7:00 - 20:00'
  googleMapsUrl: '',  // Link Google Maps (Place URL) của cửa hàng — lấy từ Google Business Profile
  ogImage: '',        // Ảnh đại diện 1200x630 (URL tuyệt đối) khi đã có ảnh thật
  latitude: null,     // TODO: tọa độ từ Google Business Profile (để null nếu chưa có)
  longitude: null,
};

/** Ghép basePath vào một đường dẫn nội bộ ('/styles.css' -> '/repo/styles.css'). */
export function url(path) {
  if (/^https?:/.test(path)) return path;
  const base = site.basePath.endsWith('/') ? site.basePath : site.basePath + '/';
  return base + path.replace(/^\//, '');
}

/** URL tuyệt đối của một đường dẫn nội bộ (dùng cho canonical / og:url / sitemap). */
export function canonical(path = '/') {
  const base = site.siteUrl.replace(/\/$/, '');
  const clean = path === '/' ? '/' : '/' + path.replace(/^\//, '');
  return base + url(clean);
}
