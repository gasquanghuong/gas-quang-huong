import { site, url, canonical } from '../../site.config.js';
import { callBtn, mapsBtn, phoneList, phoneLink } from '../partials/cta.js';

const services = [
  {
    href: '/giao-gas-tan-nha/',
    icon: '🛵',
    title: 'Giao gas tận nhà',
    text: 'Đặt gas bằng cách gọi điện, cửa hàng giao bình gas đến địa chỉ bạn đã hẹn tại Đắk Lắk. Bạn kiểm tra bình trước khi nhận.',
  },
  {
    href: '/sua-chua-bep-gas/',
    icon: '🔧',
    title: 'Sửa chữa bếp gas',
    text: 'Bếp gas hư hỏng, chập chờn hay khó đánh lửa — gọi cho cửa hàng để mô tả sự cố và nhận hướng dẫn xử lý.',
  },
  {
    href: '/bep-gas-thiet-bi-gas/',
    icon: '🍳',
    title: 'Bếp gas & thiết bị gas',
    text: 'Bán bếp gas và các thiết bị, phụ kiện đi kèm cho gia đình, cửa hàng. Liên hệ để biết hàng hiện có.',
  },
];

const products = [
  {
    icon: '🔥',
    title: 'Bếp gas',
    text: 'Bếp gas cho gia đình và bếp ăn nhỏ. Mô tả nhu cầu sử dụng để được tư chọn loại bếp phù hợp.',
  },
  {
    icon: '⚙️',
    title: 'Van gas',
    text: 'Van dùng cho bình gas gia đình, chọn theo bình và bếp bạn đang dùng. Cửa hàng hướng dẫn lắp đặt khi giao.',
  },
  {
    icon: '🔌',
    title: 'Dây dẫn gas',
    text: 'Dây nối bình gas với bếp. Nên thay mới khi dây cũ, nứt hoặc hư để việc dùng bếp được an toàn.',
  },
  {
    icon: '🧰',
    title: 'Thiết bị liên quan',
    text: 'Phụ kiện và thiết bị đi kèm bếp gas. Liên hệ trước để xác nhận chủng loại còn hay chưa.',
  },
];

const steps = [
  {
    title: 'Gọi điện',
    text: 'Gọi một trong ba số điện thoại của cửa hàng để đặt gas hoặc hỏi thông tin.',
  },
  {
    title: 'Cung cấp thông tin',
    text: 'Cho biết loại gas, số lượng và địa chỉ nhận hàng để cửa hàng ghi nhận.',
  },
  {
    title: 'Giao và đổi bình',
    text: 'Cửa hàng giao gas đến địa chỉ đã hẹn và đổi bình tại chỗ cho bạn.',
  },
  {
    title: 'Kiểm tra, thanh toán',
    text: 'Kiểm tra bình gas khi nhận và thanh toán theo thỏa thuận với cửa hàng.',
  },
];

const faqs = [
  {
    q: 'Đặt gas thì gọi số nào?',
    a: `<p>Cửa hàng có 3 số điện thoại. Gọi một trong các số dưới đây để đặt gas hoặc hỏi thông tin:</p>${phoneList()}`,
  },
  {
    q: 'Có giao gas tận nhà không?',
    a: '<p>Có. Cửa hàng giao gas tận nhà trong khu vực Đắk Lắk. Bạn liên hệ để được xác nhận khu vực và thời gian giao tại địa chỉ của mình.</p>',
  },
  {
    q: 'Đổi bình gas cần làm gì?',
    a: '<p>Gọi cho cửa hàng, cho biết loại bình và địa chỉ cần đổi. Điều kiện đổi bình được xác nhận trực tiếp khi bạn liên hệ.</p>',
  },
  {
    q: 'Giá gas hiện tại bao nhiêu?',
    a: '<p>Giá thay đổi theo thời điểm. Bạn liên hệ trực tiếp với cửa hàng để được báo giá mới nhất.</p>',
  },
  {
    q: 'Sửa chữa bếp gas liên hệ số nào?',
    a: '<p>Liên hệ cùng các số điện thoại của cửa hàng ở trên để yêu cầu sửa chữa bếp gas và được hướng dẫn các bước tiếp theo.</p>',
  },
  {
    q: 'Địa chỉ và giờ mở cửa là gì?',
    a: `<p>Thông tin địa chỉ và giờ mở cửa đang được cập nhật — xem mục Liên hệ bên dưới hoặc gọi trực tiếp cho cửa hàng để hỏi.<br><span class="todo">TODO — điền địa chỉ và giờ mở cửa đã xác nhận (khớp Google Business Profile)</span></p>`,
  },
];

export default {
  path: '/',
  title: 'Đại lý Gas Quang Hương | Giao gas · Sửa bếp gas Đắk Lắk',
  description:
    'Đại lý Gas Quang Hương giao gas tận nhà, sửa chữa bếp gas và bán bếp gas, thiết bị gas tại Đắk Lắk. Gọi ngay để đặt gas và được tư vấn khu vực giao.',
  body: `
<section class="hero">
  <div class="container hero__inner">
    <p class="eyebrow">Đại lý gas · Đắk Lắk</p>
    <h1 class="hero__title">Đại lý Gas Quang Hương — giao gas tận nhà tại Đắk Lắk</h1>
    <p class="hero__lead">Chúng tôi nhận giao gas tận nhà, sửa chữa bếp gas và cung cấp bếp gas cùng thiết bị gas cho gia đình và cửa hàng trên địa bàn tỉnh Đắk Lắk.</p>
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
    <div class="hero__badges">
      <span class="badge">📞 3 số điện thoại</span>
      <span class="badge">📍 Khu vực Đắk Lắk</span>
      <span class="badge">🛠️ Giao gas · Sửa bếp · Bán bếp gas</span>
    </div>
    <div class="hero__figure"><div><span aria-hidden="true">🏪</span>TODO: thay bằng ảnh thực tế cửa hàng</div></div>
  </div>
</section>

<section class="section" id="dich-vu">
  <div class="container">
    <div class="section__head">
      <p class="eyebrow">Dịch vụ</p>
      <h2 class="section__title">Dịch vụ của Gas Quang Hương</h2>
      <p class="section__intro">Ba việc cửa hàng làm nhiều nhất — chọn một mục để xem chi tiết.</p>
    </div>
    <div class="grid grid--3">
      ${services
        .map(
          (s) => `<a class="card" href="${url(s.href)}">
        <span class="card__icon" aria-hidden="true">${s.icon}</span>
        <h3 class="card__title">${s.title}</h3>
        <p class="card__text">${s.text}</p>
      </a>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--alt" id="san-pham">
  <div class="container">
    <div class="section__head">
      <p class="eyebrow">Sản phẩm</p>
      <h2 class="section__title">Bếp gas và thiết bị gas</h2>
      <p class="section__intro">Cửa hàng cung cấp bếp gas cùng các thiết bị đi kèm. Chủng loại và tình trạng hàng có thay đổi theo thời điểm — liên hệ để hỏi trước khi tới.</p>
    </div>
    <div class="grid grid--2">
      ${products
        .map(
          (p) => `<article class="card">
        <span class="card__icon" aria-hidden="true">${p.icon}</span>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__text">${p.text}</p>
      </article>`
        )
        .join('\n      ')}
    </div>
    <p><span class="todo">TODO — bổ sung bảng giá sản phẩm khi chủ cửa hàng xác nhận (hiện tại liên hệ để được báo giá).</span></p>
    <p>${callBtn('Gọi hỏi hàng', { cls: 'btn btn--outline' })}</p>
    <p><a class="btn btn--ghost" href="${url('/bep-gas-thiet-bi-gas/')}">Xem chi tiết bếp gas &amp; thiết bị gas</a></p>
  </div>
</section>

<section class="section" id="quy-trinh">
  <div class="container">
    <div class="section__head">
      <p class="eyebrow">Quy trình</p>
      <h2 class="section__title">Quy trình đặt gas</h2>
      <p class="section__intro">Bốn bước đơn giản từ lúc gọi điện đến khi nhận bình gas.</p>
    </div>
    <ol class="steps">
      ${steps
        .map(
          (s, i) => `<li class="step">
        <span class="step__num" aria-hidden="true">${i + 1}</span>
        <h3 class="step__title">${s.title}</h3>
        <p class="step__text">${s.text}</p>
      </li>`
        )
        .join('\n      ')}
    </ol>
  </div>
</section>

<section class="section section--alt" id="khu-vuc">
  <div class="container narrow">
    <div class="section__head">
      <p class="eyebrow">Khu vực phục vụ</p>
      <h2 class="section__title">Giao gas tại ${site.province}</h2>
      <p class="section__intro">Cửa hàng nhận giao gas và phục vụ sửa chữa, bán bếp gas trên địa bàn tỉnh ${site.province}. Bạn gọi điện để xác nhận cửa hàng có giao đến địa chỉ của mình hay không.</p>
    </div>
    <div class="callout callout--todo">
      <p><strong>Ghi chú nội bộ:</strong> <span class="todo">TODO: xác nhận danh sách phường/xã/khu vực giao cụ thể</span></p>
      <p>Chưa có danh sách đã duyệt, nên trang này chỉ ghi cấp tỉnh ${site.province} — không liệt kê khu vực cụ thể.</p>
    </div>
  </div>
</section>

<section class="section" id="gioi-thieu">
  <div class="container narrow">
    <div class="section__head">
      <p class="eyebrow">Về cửa hàng</p>
      <h2 class="section__title">Giới thiệu cửa hàng</h2>
      <p class="section__intro">${site.name} — đại lý gas tại ${site.province}, hoạt động với các thông tin đã được xác nhận sau đây.</p>
    </div>
    <ul class="checklist">
      <li>Tên đại lý: <strong>${site.name}</strong></li>
      <li>Khu vực: <strong>${site.province}</strong></li>
      <li>3 số điện thoại: <strong>0984 998 189 · 0984 024 924 · 0943 705 705</strong></li>
      <li>Website cũ: <a href="${site.legacyWebsite}" rel="noopener noreferrer">quanghuongdaklak.giucban.vn</a></li>
    </ul>
    <p style="margin-top:1.25rem">${phoneList()}</p>
    <p><span class="todo">TODO — bổ sung năm thành lập, chứng nhận, chính sách… chỉ sau khi chủ cửa hàng xác nhận.</span></p>
  </div>
</section>

<section class="section section--alt" id="faq">
  <div class="container narrow">
    <div class="section__head">
      <p class="eyebrow">Hỏi đáp</p>
      <h2 class="section__title">Câu hỏi thường gặp</h2>
      <p class="section__intro">Những câu khách hay hỏi khi đặt gas và sửa bếp.</p>
    </div>
    <div class="faq">
      ${faqs
        .map(
          (f) => `<details class="faq__item">
        <summary class="faq__q">${f.q}</summary>
        <div class="faq__a">${f.a}</div>
      </details>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section" id="lien-he">
  <div class="container">
    <div class="section__head">
      <p class="eyebrow">Liên hệ</p>
      <h2 class="section__title">Liên hệ đặt gas</h2>
      <p class="section__intro">Gọi trực tiếp cho cửa hàng — nhân viên xác nhận thông tin khi bạn liên hệ.</p>
    </div>
    <div class="contact-grid">
      <div>
        <h3 class="card__title">Số điện thoại</h3>
        ${phoneList()}
        <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
      </div>
      <dl class="nap">
        <div class="nap__row"><dt>Tên</dt><dd>${site.name}</dd></div>
        <div class="nap__row"><dt>Khu vực</dt><dd>${site.province}</dd></div>
        <div class="nap__row"><dt>Địa chỉ</dt><dd><span class="todo">TODO — điền địa chỉ cửa hàng (khớp Google Business Profile)</span></dd></div>
        <div class="nap__row"><dt>Giờ mở cửa</dt><dd><span class="todo">TODO — điền giờ mở cửa đã xác nhận</span></dd></div>
      </dl>
    </div>
  </div>
</section>
`,
};
