import { site, url } from '../../site.config.js';
import { callBtn, mapsBtn, phoneList } from '../partials/cta.js';

export default {
  path: '/sua-chua-bep-gas/',
  title: 'Sửa chữa bếp gas tại Đắk Lắk | Đại lý Gas Quang Hương',
  description:
    'Sửa chữa bếp gas tại Đắk Lắk: kiểm tra, sửa và bảo dưỡng bếp gas. Đại lý Gas Quang Hương hướng dẫn xử lý sự cố và quy trình kiểm tra thiết bị.',
  breadcrumbLabel: 'Sửa chữa bếp gas',
  body: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Dịch vụ</p>
    <h1 class="page-hero__title">Sửa chữa bếp gas tại Đắk Lắk</h1>
    <p class="page-hero__lead">Đại lý Gas Quang Hương nhận kiểm tra, sửa và bảo dưỡng bếp gas. Khi bếp đánh lửa kém, cháy bất thường hoặc có dấu hiệu bất ổn, bạn gọi cho cửa hàng để được mô tả lỗi và hướng dẫn xử lý.</p>
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Các sự cố thường gặp ở bếp gas</h2>
      <p class="section__intro">Dưới đây là những biểu hiện khách hàng hay gặp khi dùng bếp gas. Đây chỉ là mô tả triệu chứng, việc xác định nguyên nhân cần kiểm tra trực tiếp thiết bị.</p>
    </div>
    <div class="grid grid--3">
      <div class="card">
        <span class="card__icon" aria-hidden="true">🔥</span>
        <h3 class="card__title">Bếp không đánh lửa</h3>
        <p class="card__text">Bạn ấn nút đánh lửa nhưng không thấy tia lửa, hoặc lửa không bắt dù đã thử lại nhiều lần.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">🟠</span>
        <h3 class="card__title">Lửa đỏ, lửa vàng</h3>
        <p class="card__text">Lửa không còn màu xanh nhạt mà ngả đỏ hoặc vàng, khói đen bám vào nồi và đầu đốt.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">⚠️</span>
        <h3 class="card__title">Bếp bị hở lửa, nổ lửa</h3>
        <p class="card__text">Lửa cháy không ổn định, bùng lên chạy ra ngoài vùng nấu hoặc nổ lách tách khi đang dùng.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">👃</span>
        <h3 class="card__title">Ngửi thấy mùi gas</h3>
        <p class="card__text">Có mùi khí gas quanh bếp hoặc khu vực bình gas, kể cả khi bếp đang tắt.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">🎛️</span>
        <h3 class="card__title">Núm vặn, ghế bếp hỏng</h3>
        <p class="card__text">Núm vặn bị lỏng, xoay không ăn, hoặc bộ phận ghê, khóa trên bếp không khít được nữa.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">🍳</span>
        <h3 class="card__title">Mặt kính, kiềng hỏng</h3>
        <p class="card__text">Mặt kính bếp nứt, vỡ, hoặc kiềng bếp bị lệch, gãy chân khiến nồi đặt không vững.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Làm gì khi nghi ngờ rò rỉ gas</h2>
      <p class="section__intro">Nếu bạn ngửi thấy mùi gas hoặc nghi ngờ hở ở bếp, hãy xử lý theo các bước an toàn chung sau đây trước khi gọi cửa hàng.</p>
    </div>
    <div class="callout callout--warn">
      <p><strong>Không bật tắt thiết bị điện trong vùng nghi ngờ rò rỉ.</strong> Tia lửa điện từ công tắc, đèn hay quạt có thể gây cháy khi khí gas đã lan ra không khí.</p>
    </div>
    <div class="card">
      <div class="card__text">
        <ul class="checklist">
          <li>Tắt van bình gas ngay lập tức để ngắt nguồn khí.</li>
          <li>Không bật hay tắt công tắc, đèn, quạt, máy hút mùi trong vùng nghi ngờ rò rỉ.</li>
          <li>Mở tất cả cửa ra vào và cửa sổ để không khí lưu thông, làm loãng khí gas.</li>
          <li>Ra khỏi khu vực đó, đứng ở nơi thoáng đãng rồi liên hệ cửa hàng để được hỗ trợ.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Quy trình kiểm tra và sửa chữa</h2>
      <p class="section__intro">Mỗi ca sửa đều đi từ mô tả lỗi của khách hàng đến kiểm tra thực tế, rồi mới tiến hành thay thế phụ kiện.</p>
    </div>
    <div class="steps">
      <div class="step">
        <span class="step__num">1</span>
        <h3 class="step__title">Tiếp nhận và mô tả lỗi</h3>
        <p class="step__text">Bạn gọi điện cho Đại lý Gas Quang Hương và mô tả biểu hiện của bếp: lỗi xảy ra từ khi nào, có mùi gas không, bếp còn đánh lửa không.</p>
      </div>
      <div class="step">
        <span class="step__num">2</span>
        <h3 class="step__title">Kiểm tra thiết bị</h3>
        <p class="step__text">Kỹ thuật viên kiểm tra các bộ phận liên quan của bếp để xác định lỗi thuộc phần nào của thiết bị.</p>
      </div>
      <div class="step">
        <span class="step__num">3</span>
        <h3 class="step__title">Thông báo lỗi và phương án</h3>
        <p class="step__text">Cửa hàng nêu rõ lỗi phát hiện được và phương án xử lý, bao gồm việc thay thế bộ phận phù hợp với model bếp đang dùng.</p>
      </div>
      <div class="step">
        <span class="step__num">4</span>
        <h3 class="step__title">Sửa chữa và thử lại</h3>
        <p class="step__text">Sau khi sửa xong, bếp được thử lại để kiểm tra đánh lửa và ngọn lửa trước khi bàn giao cho khách.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Bảo dưỡng bếp gas định kỳ</h2>
      <p class="section__intro">Vệ sinh và kiểm tra định kỳ giúp bếp cháy ổn định và phát hiện sớm hư hỏng trước khi thành sự cố lớn.</p>
    </div>
    <div class="card">
      <div class="card__text">
        <ul class="checklist">
          <li>Vệ sinh đầu đốt và lỗ thoát gas, loại bỏ cặn thức ăn bám làm tắc nghẽn ngọn lửa.</li>
          <li>Kiểm tra dây dẫn gas và van bình: dây cũ, nứt, phồng nên được thay mới.</li>
          <li>Thay các phụ kiện đã hao mòn như gioăng, đầu đánh lửa, núm vặn khi có dấu hiệu hư.</li>
          <li>Đặt lịch bảo dưỡng theo tần suất phù hợp với tần suất nấu của gia đình.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Câu hỏi thường gặp về sửa chữa bếp gas</h2>
      <p class="section__intro">Giải đáp ngắn cho những thắc mắc phổ biến trước khi bạn mang bếp đến hoặc gọi kỹ thuật viên.</p>
    </div>
    <div class="faq">
      <details class="faq__item">
        <summary class="faq__q">Bếp gas không đánh lửa thì làm sao?</summary>
        <div class="faq__a"><p>Với loại bếp dùng pin đánh lửa, bạn có thể kiểm tra xem pin còn hoạt động không. Nếu vẫn không đánh lửa, tắt van bình gas và gọi cho cửa hàng để được hướng dẫn tiếp.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Sửa bếp có tốn phí không?</summary>
        <div class="faq__a"><p>Phí sửa зависит vào lỗi thực tế và phụ kiện cần thay. Sau khi kiểm tra, cửa hàng sẽ thông báo phương án và chi phí trước khi tiến hành, bạn vui lòng liên hệ để được báo cụ thể.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Cửa hàng có nhận sửa tận nơi không?</summary>
        <div class="faq__a"><p>Điều này tùy trường hợp và khu vực. Bạn gọi cho Đại lý Gas Quang Hương để được xác nhận khả năng sửa tận nơi cho bếp của mình.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Mang bếp đến đâu để sửa?</summary>
        <div class="faq__a"><p>Bạn liên hệ cửa hàng qua một trong ba số điện thoại, nhân viên sẽ hướng dẫn cách mang bếp đến và thời gian phù hợp.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Bếp bị hở lửa có nên tự sửa không?</summary>
        <div class="faq__a"><p>Bếp hở lửa liên quan trực tiếp đến đường dẫn gas, bạn không nên tự tháo rời. Tắt van bình gas, ngừng sử dụng và gọi cửa hàng kiểm tra.</p></div>
      </details>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Liên hệ yêu cầu kiểm tra bếp</h2>
      <p class="section__intro">Gọi cho Đại lý Gas Quang Hương để mô tả lỗi và đặt lịch kiểm tra bếp gas.</p>
    </div>
    ${phoneList()}
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <p class="lead">Bếp đang dùng bình gas sắp hết? Đặt thêm bình qua dịch vụ <a href="${url('/giao-gas-tan-nha/')}">giao gas tận nhà</a>. Nếu bạn muốn thay bếp mới, xem thêm <a href="${url('/bep-gas-thiet-bi-gas/')}">bếp gas và thiết bị gas</a>, hoặc xem <a href="${url('/')}">trang chủ</a> để biết thêm về <a href="${url('/lien-he/')}">Đại lý Gas Quang Hương</a>.</p>
  </div>
</section>
`,
};
