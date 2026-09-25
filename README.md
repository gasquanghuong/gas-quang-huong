# Website Đại lý Gas Quang Hương

Website tĩnh SEO Local (Google Search + Google Maps) cho **Đại lý Gas Quang Hương** — đại lý gas, giao gas tận nhà, sửa chữa bếp gas, bán bếp gas và thiết bị gas tại Đắk Lắk.

- **Website:** https://gasquanghuong.github.io/gas-quang-huong/
- **Repo:** https://github.com/gasquanghuong/gas-quang-huong
- **Google (chia sẻ):** https://share.google/NA8E4Lkim4UjjeIIt

- **Công nghệ:** HTML/CSS/JS thuần + script build bằng Node (zero dependency, không npm install).
- **Deploy:** GitHub Pages (miễn phí, không cần domain riêng).
- **Không có:** backend, database, API key, dịch vụ trả phí.

## Cấu trúc thư mục

```
├── build.js                 # Build: src/pages/*.js -> dist/ + sitemap.xml
├── site.config.js           # ⚙️ MỌI thông tin doanh nghiệp (sửa file này)
├── public/
│   ├── robots.txt           # Có placeholder __SITEMAP__ tự điền khi build
│   └── favicon.svg
├── src/
│   ├── layouts/base.js      # <head> SEO + khung trang (meta, OG, JSON-LD)
│   ├── partials/
│   │   ├── header.js        # Header + navigation
│   │   ├── footer.js        # Footer + breadcrumbs
│   │   ├── cta.js           # Component CTA tái sử dụng (tel:, bản đồ, mobile bar)
│   │   └── schema.js        # JSON-LD LocalBusiness (chỉ dữ liệu đã xác nhận)
│   ├── pages/               # 5 trang — mỗi file 1 trang
│   │   ├── home.js          # Trang chủ
│   │   ├── giao-gas-tan-nha.js
│   │   ├── sua-chua-bep-gas.js
│   │   ├── bep-gas-thiet-bi-gas.js
│   │   └── lien-he.js
│   ├── styles.css           # Design system (mobile-first)
│   └── main.js              # JS tối giản (menu mobile)
├── .github/workflows/deploy.yml   # Auto deploy GitHub Pages
└── dist/                    # Thư mục build (không commit)
```

## Chạy local

```bash
node build.js            # build vào dist/
node build.js --serve    # build + xem tại http://localhost:4321/<base-path>/
```

## Hướng dẫn deploy lên GitHub Pages

### 1. Tạo repository

1. GitHub → **New repository** → tên ví dụ: `gas-quang-huong` (không cần bật GitHub Pages thủ công).
2. Push code lên nhánh `main`:

```bash
git init
git add .
git commit -m "Website Đại lý Gas Quang Hương"
git branch -M main
git remote add origin https://github.com/<github-username>/<repository-name>.git
git push -u origin main
```

### 2. Bật GitHub Pages (source = GitHub Actions)

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push lần nữa (hoặc vào **Actions → Deploy GitHub Pages → Run workflow**).
3. Chờ workflow xong → website tại `https://<github-username>.github.io/<repository-name>/`.

### 3. ⚙️ Cập nhật URL thật (QUAN TRỌNG — làm trước khi submit SEO)

Sửa `site.config.js`:

```js
siteUrl: 'https:<github-username>.github.io',   // ← https:// + username thật
basePath: '/<repository-name>/',                // ← / + tên repo thật
```

- `basePath` **bắt đầu và kết thúc bằng `/`** (ví dụ `'/gas-quang-huong/'`) — sai chỗ này sẽ lỗi CSS/routing.
- Workflow có truyền `--base "/<tên-repo>/"` khi build nên `basePath` luôn đúng theo tên repo, nhưng **`siteUrl` phải tự cập nhật** (dùng cho canonical, og:url, sitemap).
- Build lại local để kiểm tra: `node build.js`.

## Sửa thông tin doanh nghiệp

Mọi thông tin tập trung ở **`site.config.js`** (số điện thoại, tên, URL, địa chỉ, bản đồ…). Sửa 1 chỗ, tất cả trang + sitemap + JSON-LD tự cập nhật.

Các mục **TODO đang để trống, không tự bịa** — chỉ điền khi chủ cửa hàng xác nhận:

| TODO | Nơi điền |
|---|---|
| Địa chỉ cửa hàng | `site.config.js` → `address` |
| Giờ mở cửa | `site.config.js` → `openingHours` |
| Link Google Maps (Place URL) | `site.config.js` → `googleMapsUrl` |
| Tọa độ (nếu có) | `site.config.js` → `latitude` / `longitude` |
| Ảnh OG 1200×630 | `site.config.js` → `ogImage` |
| Ảnh thật cửa hàng/hero | thay `.hero__figure` trong `src/pages/home.js` |
| Khu vực giao cụ thể (phường/xã) |Tìm trong nội dung các trang → tìm `TODO` |
| Bảng giá, danh sách bếp đang bán | tìm `TODO` trong `src/pages/` |

> NAP consistency: **tên + số điện thoại + địa chỉ** phải khớp Google Business Profile. Nếu đổi số/sửa tên, cập nhật cả ở Google Business Profile.

## Thêm/sửa trang

1. Tạo file `src/pages/ten-trang.js` xuất `default { path, title, description, breadcrumbLabel?, body }`.
2. `build.js` tự đọc toàn bộ file trong `src/pages/` — không cần đăng ký.
3. Thêm vào menu: sửa `navItems` trong `src/partials/header.js`.
4. Link nội bộ dùng `url('/ten-trang/')`.

## Thay ảnh

Hiện tại **không dùng ảnh nào** (tránh ảnh giả). Khi có ảnh thật:

1. Đặt file vào `public/` (vd `public/anh-cua-hang.webp` — nén < 150KB, WebP).
2. Dùng trong trang: `<img src="${url('/anh-cua-hang.webp')}" alt="Mô tả đúng nội dung ảnh" width="800" height="600" loading="lazy">` (ảnh đầu màn hình thì bỏ `loading="lazy"`).
3. Ảnh đại diện OG: điền `site.ogImage` bằng URL tuyệt đối sau khi deploy.

## Kết nối Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → **Thêm tài nguyên** → **Trang web** → dán `https://<github-username>.github.io/`.
2. Xác minh bằng **HTML tag**: copy thẻ `<meta name="google-site-verification" content="...">`, dán vào `src/layouts/base.js` trong `<head>` (dòng TODO nếu có, hoặc ngay trước `</head>`), build lại, deploy, rồi quay lại bấm **Xác minh**.
3. Sau khi xác minh: **Sơ đồ trang (Sitemaps)** → nhập `https://<github-username>.github.io/<repository-name>/sitemap.xml` → Gửi.
4. Liên kết Google Business Profile với website (trong hồ sơ doanh nghiệp) để hỗ trợ SEO Local.

## Trước khi public — Checklist

- [ ] `site.config.js`: `siteUrl` và `basePath` đúng tên GitHub thật
- [ ] Build local không lỗi: `node build.js` → mở `node build.js --serve` kiểm tra 5 trang
- [ ] 3 số điện thoại đúng, nút `tel:` bấm gọi được trên điện thoại
- [ ] Kiểm tra mobile: menu mở được, thanh CTA dưới cùng không che nội dung cuối
- [ ] Điền TODO: địa chỉ, giờ mở cửa, link Google Maps (chỉ thông tin CHỨNG MINH được)
- [ ] Thay ảnh placeholder bằng ảnh thật cửa hàng (nếu có)
- [ ] GitHub Pages source = GitHub Actions, workflow deploy xanh
- [ ] Mở website thật, kiểm tra: title, mô tả, link nội bộ, không có link gãy
- [ ] NỘI DUNG chưa xác nhận (giá, khu vực giao, chính sách) vẫn là TODO — **không tự bịa**
- [ ] Submit sitemap trên Google Search Console
- [ ] Kiểm tra Google Rich Results Test (`https://search.google.com/test/rich-results`) — chỉ cảnh báo thiếu địa chỉ là bình thường khi chưa có dữ liệu xác nhận
- [ ] Đối chiếu NAP với Google Business Profile

## Lưu ý

- `robots.txt` trên GitHub Pages **project site** nằm ở `<repo>/robots.txt` chứ không phải gốc domain — Google đọc robots.txt từ gốc, nên **bắt buộc submit sitemap trực tiếp trên Search Console** (đã hướng dẫn ở trên). Nếu sau này mua domain riêng thì robots.txt tự động hoạt động đúng chỗ.
- Không có schema đánh giá/rating (vi phạm chính sách Google nếu dữ liệu giả).
- Website không hứa hẹn thứ hạng tìm kiếm.
