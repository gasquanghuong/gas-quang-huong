import { site, url } from '../../site.config.js';
import { callBtn, mapsBtn, phoneList } from '../partials/cta.js';

export default {
  path: '/lien-he/',
  title: 'Liên hệ Đại lý Gas Quang Hương tại Đắk Lắk',
  description:
    'Liên hệ Đại lý Gas Quang Hương tại Đắk Lắk: gọi 0984 998 189 để đặt gas, hỏi giá, yêu cầu kiểm tra hoặc sửa chữa bếp gas. Xem địa chỉ và bản đồ.',
  breadcrumbLabel: 'Liên hệ',
  body: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Liên hệ nhanh</p>
    <h1 class="page-hero__title">Liên hệ Đại lý Gas Quang Hương</h1>
    <p class="page-hero__lead">Gọi cho ${site.name} để đặt gas, hỏi giá hoặc yêu cầu kiểm tra, sửa chữa bếp gas tại Đắk Lắk. Gọi điện là cách trực tiếp nhất để nhận hỗ trợ từ cửa hàng.</p>
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Gọi điện ngay</h2>
      <p class="section__intro">Chọn một trong các số dưới đây để gọi thẳng tới cửa hàng. Gọi để được hỗ trợ ngay — hỏi giá, đặt bình gas hay nhờ xem xét sự cố bếp.</p>
    </div>
    <div class="contact-grid">
      <div>
        ${phoneList()}
        <p class="lead">Bạn đang cần đổi bình gas, mua bếp gas và thiết bị gas hay nhờ kiểm tra bếp? Cứ gọi, cửa hàng sẽ tư vấn trực tiếp qua điện thoại.</p>
      </div>
      <div class="callout callout--todo">TODO: giờ mở cửa (chưa xác nhận)</div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Địa chỉ cửa hàng</h2>
      <p class="section__intro">Thông tin nhận diện cửa hàng cần khớp với hồ sơ Google Business Profile để khách dễ tìm đúng nơi.</p>
    </div>
    <div class="nap">
      <div class="nap__row"><strong>Tên:</strong> ${site.name}</div>
      <div class="nap__row"><strong>Khu vực:</strong> ${site.province}</div>
      <div class="nap__row"><strong>Địa chỉ:</strong> <span class="todo">TODO: điền địa chỉ cửa hàng (khớp Google Business Profile — NAP consistency)</span></div>
      <div class="nap__row"><strong>Điện thoại:</strong> ${site.phones.map((p) => `<a href="tel:${p.tel}">${p.display}</a>`).join(' · ')}</div>
    </div>
  </div>
</section>

<section class="section" id="ban-do">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Bản đồ</h2>
      <p class="section__intro">Nút “Xem bản đồ” trên trang trỏ tới khu vực này. Khi đã có link Google Maps của cửa hàng, bản đồ sẽ hiển thị ngay tại đây.</p>
    </div>
    <div class="map-placeholder">TODO: nhemsp Google Maps iframe hoặc thêm link Google Maps Place URL vào site.config.js (googleMapsUrl)</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Kết nối khác</h2>
      <p class="section__intro">Ngoài website này, ${site.name} còn có trang web cũ đang hoạt động.</p>
    </div>
    <p><a href="${site.legacyWebsite}" rel="noopener" target="_blank">Website cũ: quanghuongdaklak.giucban.vn</a></p>
    <p>Các dịch vụ của cửa hàng: <a href="${url('/giao-gas-tan-nha/')}">giao gas tận nhà</a>, <a href="${url('/sua-chua-bep-gas/')}">sửa chữa bếp gas</a>, <a href="${url('/bep-gas-thiet-bi-gas/')}">bếp gas và thiết bị gas</a>.</p>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Trước khi gọi nên chuẩn bị</h2>
      <p class="section__intro">Chuẩn bị sẵn vài thông tin nhỏ giúp cuộc gọi ngắn hơn và cửa hàng trả lời đúng việc bạn cần.</p>
    </div>
    <ul class="checklist">
      <li><strong>Đổi gas:</strong> ghi rõ loại bình và số lượng bạn cần đổi.</li>
      <li><strong>Địa chỉ giao:</strong> chuẩn bị địa chỉ nhận gas để cửa hàng xác nhận khả năng giao đến khu vực của bạn.</li>
      <li><strong>Sửa bếp:</strong> mô tả ngắn hiện tượng — bếp không đánh lửa, ngọn lửa không đều, có mùi gas hay lỗi khác.</li>
      <li><strong>Mua bếp và thiết bị:</strong> nói rõ loại bếp hoặc phụ kiện bạn đang quan tâm để được báo giá đúng.</li>
    </ul>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Liên hệ với ${site.name}</h2>
      <p class="section__intro">Chọn cách liên hệ удоб nhất với bạn ngay bây giờ.</p>
    </div>
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
    ${phoneList()}
  </div>
</section>
`,
};
