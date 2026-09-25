import { site, url } from '../../site.config.js';
import { callBtn, mapsBtn, phoneList } from '../partials/cta.js';

export default {
  path: '/giao-gas-tan-nha/',
  title: 'Giao gas tận nhà tại Đắk Lắk | Đại lý Gas Quang Hương',
  description:
    'Giao gas tận nhà và đổi bình gas tại Đắk Lắk. Đại lý Gas Quang Hương hướng dẫn cách đặt bình, thông tin cần chuẩn bị và cách nhận bình gas an toàn tại nhà.',
  breadcrumbLabel: 'Giao gas tận nhà',
  body: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Dịch vụ</p>
    <h1 class="page-hero__title">Giao gas tận nhà tại Đắk Lắk</h1>
    <p class="page-hero__lead">Đại lý Gas Quang Hương nhận đổi bình gas và giao gas tận nhà cho khách hàng tại Đắk Lắk. Bạn gọi điện đặt bình, cửa hàng giao đến và đổi bình tại nhà cho bếp đang dùng.</p>
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Đặt gas tận nhà cần làm gì</h2>
      <p class="section__intro">Quy trình đặt bình gas diễn ra qua điện thoại, bạn không cần đến cửa hàng nếu muốn giao tận nơi.</p>
    </div>
    <ol class="steps">
      <li class="step">
        <span class="step__num">1</span>
        <h3 class="step__title">Gọi điện đặt bình</h3>
        <p class="step__text">Liên hệ một trong ba số của Đại lý Gas Quang Hương, cửa hàng ghi nhận yêu cầu đổi bình của bạn ngay trong lúc trò chuyện.</p>
      </li>
      <li class="step">
        <span class="step__num">2</span>
        <h3 class="step__title">Cung cấp thông tin</h3>
        <p class="step__text">Cho biết loại bình đang dùng, số lượng, địa chỉ cần giao và thời gian bạn tiện nhận bình.</p>
      </li>
      <li class="step">
        <span class="step__num">3</span>
        <h3 class="step__title">Cửa hàng giao đến và đổi bình</h3>
        <p class="step__text">Nhân viên mang bình gas đến nhà, thay bình cũ sang bình mới và lắp đặt lại cho bếp sử dụng bình đó.</p>
      </li>
      <li class="step">
        <span class="step__num">4</span>
        <h3 class="step__title">Kiểm tra và thanh toán</h3>
        <p class="step__text">Bạn kiểm tra bình trước khi nhận, sau đó thanh toán theo thỏa thuận giữa hai bên.</p>
      </li>
    </ol>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Thông tin nên chuẩn bị khi gọi</h2>
      <p class="section__intro">Chuẩn bị sẵn các mục dưới đây giúp cuộc gọi đặt gas nhanh hơn và hạn chế phải gọi lại lần hai.</p>
    </div>
    <div class="card">
      <div class="card__text">
        <ul class="checklist">
          <li>Loại bình gas bạn đang dùng.</li>
          <li>Số lượng bình cần đổi hoặc cần giao.</li>
          <li>Địa chỉ đầy đủ để nhân viên đến đúng nhà.</li>
          <li>Thời gian bạn tiện nhận bình trong ngày.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Nhận bình gas an toàn</h2>
      <p class="section__intro">Vài bước kiểm tra nhanh trước khi nhận bình giúp bếp vận hành ổn định và an toàn hơn sau khi đổi.</p>
    </div>
    <div class="card">
      <div class="card__text">
        <ul class="checklist">
          <li>Kiểm tra tình trạng bình: vỏ bình không bị móp sâu, nứt, rỉ sét hay hư hỏng đáng ngờ.</li>
          <li>Kiểm tra van bình và dây dẫn: khớp nối chắc chắn, dây không bị nứt, phồng, già cũ hay có dấu hiệu hở.</li>
          <li>Nếu nghi ngờ bình có vấn đề, báo ngay với nhân viên giao hàng và cửa hàng, không tự ý sử dụng.</li>
          <li>Ngửi thấy mùi gas thì tắt van bình gas, không bật hay tắt công tắc và đèn điện trong vùng nghi ngờ, mở cửa cho thông gió, ra khu vực an toàn rồi gọi cho cửa hàng.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Câu hỏi thường gặp khi đổi gas tận nhà</h2>
      <p class="section__intro">Những thắc mắc khách hàng hay gửi cho Đại lý Gas Quang Hương trước khi đặt bình.</p>
    </div>
    <div class="faq">
      <details class="faq__item">
        <summary class="faq__q">Giao gas mất bao lâu thì đến?</summary>
        <div class="faq__a"><p>Thời gian giao còn tùy khoảng cách và tình hình vận chuyển trong ngày. Bạn vui lòng gọi điện để được xác nhận khi đặt bình.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Cửa hàng giao gas ở những khu vực nào?</summary>
        <div class="faq__a"><p>Đại lý Gas Quang Hương phục vụ khách hàng tại Đắk Lắk. Khu vực giao cụ thể thay đổi theo thời điểm, bạn liên hệ để được xác nhận khu vực cửa hàng đang giao.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Đổi bình gas có cần đặt cọc không?</summary>
        <div class="faq__a"><p>Quy định về bình cọc phụ thuộc vào loại bình đang dùng. Vui lòng liên hệ cửa hàng để được giải đáp rõ ràng cho trường hợp của bạn.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Muốn đặt gas ngoài giờ thì làm sao?</summary>
        <div class="faq__a"><p>Bạn gọi điện cho cửa hàng, nhân viên sẽ hướng dẫn và hỗ trợ bạn trong khả năng của cửa hàng vào thời điểm đó.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Khi nhận bình cần kiểm tra gì?</summary>
        <div class="faq__a"><p>Bạn kiểm tra tình trạng vỏ bình, van bình và dây dẫn trước khi nhận. Thấy dấu hiệu bất thường thì báo ngay cho nhân viên để được đổi hoặc kiểm tra lại.</p></div>
      </details>
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Liên hệ đặt gas tận nhà</h2>
      <p class="section__intro">Gọi cho Đại lý Gas Quang Hương để đặt bình gas và trao đổi về địa chỉ giao hàng.</p>
    </div>
    ${phoneList()}
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <p class="lead">Bếp gas nhà bạn đang có dấu hiệu bất thường? Xem thêm dịch vụ <a href="${url('/sua-chua-bep-gas/')}">sửa chữa bếp gas</a> của cửa hàng, hoặc tham khảo <a href="${url('/bep-gas-thiet-bi-gas/')}">bếp gas và thiết bị gas</a> nếu bạn đang cần thay mới thiết bị. Thông tin về <a href="${url('/')}">Đại lý Gas Quang Hương</a> và cách liên hệ đầy đủ có tại trang <a href="${url('/lien-he/')}">Liên hệ</a>.</p>
  </div>
</section>
`,
};
