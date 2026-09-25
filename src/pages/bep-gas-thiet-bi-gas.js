import { site, url } from '../../site.config.js';
import { callBtn, mapsBtn, phoneList } from '../partials/cta.js';

export default {
  path: '/bep-gas-thiet-bi-gas/',
  title: 'Bếp gas và thiết bị gas tại Đắk Lắk — Đại lý Gas Quang Hương',
  description:
    'Bếp gas và thiết bị gas tại Đắk Lắk: cách chọn bếp gas, van an toàn, dây dẫn và phụ kiện dùng an toàn. Đại lý Gas Quang Hương tư vấn, báo giá.',
  breadcrumbLabel: 'Bếp gas & thiết bị gas',
  body: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Bán bếp gas và thiết bị gas</p>
    <h1 class="page-hero__title">Bếp gas và thiết bị gas tại Đắk Lắk</h1>
    <p class="page-hero__lead">Đại lý Gas Quang Hương bán bếp gas và thiết bị gas cho gia đình, quán ăn và bếp công nghiệp nhỏ tại Đắk Lắk, kèm hướng dẫn chọn bếp, van an toàn và dây dẫn sao cho đúng nhu cầu và dùng an toàn. Chưa rõ chọn loại nào, gọi để được tư vấn trước khi mua.</p>
    <div class="hero__actions">${callBtn('Gọi đặt gas')}${mapsBtn('Xem bản đồ')}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Chọn bếp gas phù hợp</h2>
      <p class="section__intro">Trước khi mua bếp, hãy tự trả lời vài câu đơn giản về cách nấu của gia đình. Chọn đúng bếp từ đầu giúp bếp chạy ổn định và ít phát sinh sự cố về sau.</p>
    </div>
    <div class="grid grid--2">
      <div class="card">
        <span class="card__icon" aria-hidden="true">🔥</span>
        <h3 class="card__title">Số lượng bếp</h3>
        <p class="card__text">Đếm số lần nấu mỗi ngày và số người cùng nấu. Gia đình ít người thường chỉ cần một bếp, hộ kinh doanh nhỏ thì nên tính thêm chỗ dự phòng khi nấu liên tục.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">◈</span>
        <h3 class="card__title">Kiềng và mặt bếp</h3>
        <p class="card__text">Xem kiềng có chắc, đặt nồi có cân không và mặt bếp có dễ lau rửa sau khi nấu. Nồi to, chảo đáy rộng thì cần kiềng giữ nồi ổn định, tránh nghiêng khi đang nấu.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">⚡</span>
        <h3 class="card__title">Hệ thống đánh lửa</h3>
        <p class="card__text">Bật thử nút đánh lửa tại chỗ để xem tia lửa có đều và nhạy không, ngọn lửa có cháy đều quanh kiềng không. Hỏi người bán cách đánh lửa và cách tắt an toàn.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">🧽</span>
        <h3 class="card__title">Dễ vệ sinh</h3>
        <p class="card__text">Bếp có tháo rời kiềng, khay hứng dầu hay không quyết định việc lau rửa nhanh hay chậm. Bếp hay bị tràn thức ăn thì càng nên chọn loại ít mối nối, ít khe kẽ.</p>
      </div>
    </div>
    <div class="callout callout--todo">TODO: danh sách bếp đang bán + bảng giá khi chủ cửa hàng cung cấp</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Van gas an toàn</h2>
      <p class="section__intro">Van gas là chi tiết nhỏ nằm giữa bình gas và bếp, giữ vai trò chặn khí khi có bất thường. Đây là bộ phận nên kiểm tra thường xuyên nhất trong bộ bếp của bạn.</p>
    </div>
    <div class="grid grid--2">
      <div class="card">
        <span class="card__icon" aria-hidden="true">🛡️</span>
        <h3 class="card__title">Vai trò của van an toàn</h3>
        <p class="card__text">Van giúp bạn đóng, mở đường khí từ bình đến bếp và hỗ trợ ngăn dòng khí khi có dấu hiệu bất thường. Van hoạt động tốt thì việc bật tắt bếp diễn ra êm, không bị hở khí ở mối nối.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">⚠️</span>
        <h3 class="card__title">Dấu hiệu cần thay</h3>
        <p class="card__text">Van đã dùng lâu, tay vặn khó đóng hoặc khó mở, gioăng cứng lại, hoặc bạn ngửi thấy mùi gas quanh mối nối là những lúc nên ngừng dùng và thay van. Nếu nghi ngờ rò rỉ, khóa bình ngay và gọi cửa hàng kiểm tra thay vì tự xử lý.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Dây dẫn gas</h2>
      <p class="section__intro">Dây dẫn nối bình gas với bếp thường nằm ở vị trí khuất, ít người để ý nên dễ bị bỏ sót khi kiểm tra.</p>
    </div>
    <p class="lead">Chọn dây đúng chuẩn dùng cho bếp gas, có độ dài vừa đủ để đặt bình ở vị trí thoáng, tránh dây bị gập, bị đè hoặc kéo căng qua góc cạnh sắc.</p>
    <p>Hãy nhìn kỹ bề mặt dây: vỏ ngoài còn nguyên, không nứt, không phồng, không bong tróc, đầu nối còn khít. Dây dùng lâu hoặc có bất kỳ nghi ngờ nào về vết nứt thì nên thay mới thay vì cố dùng tiếp.</p>
    <p>Sau mỗi lần đổi bình gas, hãy nhìn lại toàn bộ đoạn dây và mối nối một lần. Khi cần đổi bình gas tận nhà, xem thêm <a href="${url('/giao-gas-tan-nha/')}">giao gas tận nhà</a> hoặc gọi trực tiếp cho cửa hàng.</p>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section__head">
      <h2 class="section__title">Thiết bị và phụ kiện liên quan</h2>
      <p class="section__intro">Ngoài bếp, bộ bếp hoàn chỉnh còn cần vài chi tiết đi kèm để thay thế khi hao mòn.</p>
    </div>
    <div class="grid grid--3">
      <div class="card">
        <span class="card__icon" aria-hidden="true">◎</span>
        <h3 class="card__title">Kiềng và khay</h3>
        <p class="card__text">Kiềng đặt nồi và khay hứng dầu, hứng thức ăn rơi là hai chi tiết hay bị bám bẩn và mòn theo thời gian. Có thể thay riêng mà không cần đổi cả bếp.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">✨</span>
        <h3 class="card__title">Bộ đánh lửa</h3>
        <p class="card__text">Bộ đánh lửa hoặc đầu châm lửa kém nhạy sẽ khiến bạn bật đi bật lại nhiều lần. Đây là bộ phận có thể kiểm tra và thay khi bếp không còn đánh lửa ổn định.</p>
      </div>
      <div class="card">
        <span class="card__icon" aria-hidden="true">🔧</span>
        <h3 class="card__title">Phụ kiện thay thế</h3>
        <p class="card__text">Van gas, dây dẫn, gioăng nối và các chi tiết nhỏ đi kèm đều thuộc nhóm phụ kiện thường xuyên phải thay. Nên hỏi trước cửa hàng về loại đang có sẵn trước khi ghé lấy.</p>
      </div>
    </div>
    <div class="callout callout--todo">TODO: danh mục phụ kiện thực tế đang bày bán (khi chủ cửa hàng cung cấp)</div>
    <p>Nếu bếp đang dùng có vấn đề, hãy xem <a href="${url('/sua-chua-bep-gas/')}">sửa chữa bếp gas</a> hoặc gọi nhờ kiểm tra.</p>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Lưu ý khi lắp đặt và sử dụng</h2>
      <p class="section__intro">Vài thói quen nhỏ sau khi lắp bếp giúp phát hiện sớm sự cố thay vì chờ đến khi có mùi gas.</p>
    </div>
    <ul class="checklist">
      <li>Kiểm tra lại toàn bộ mối nối giữa bình gas, van, dây dẫn và bếp sau khi lắp xong, bật thử ở mức lửa nhỏ trước khi nấu thật.</li>
      <li>Không tự sửa chữa khi nghi ngờ rò rỉ gas — khóa bình ngay, mở thoáng khu vực bếp và gọi cửa hàng kiểm tra.</li>
      <li>Đặt bình gas ở nơi thoáng, đứng vững, không bị đè vật nặng và xa nguồn nhiệt trực tiếp.</li>
      <li>Nhờ người có kinh nghiệm hoặc thợ kiểm tra khi thấy bất thường về ngọn lửa, mối nối hoặc van gas.</li>
      <li>Đổi bình gas đúng cách, tránh để bình cạn kiệt rồi mới gọi giao; khi cần gọi xem <a href="${url('/giao-gas-tan-nha/')}">giao gas tận nhà</a>.</li>
    </ul>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Cần tư vấn trước khi mua?</h2>
      <p class="section__intro">Gọi cho ${site.name} để hỏi về bếp gas, phụ kiện và cách lắp đặt phù hợp với bếp của bạn.</p>
    </div>
    <div class="hero__actions">${callBtn('Gọi tư vấn & báo giá')}${mapsBtn('Xem bản đồ')}</div>
    ${phoneList()}
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section__head">
      <h2 class="section__title">Câu hỏi thường gặp</h2>
      <p class="section__intro">Những thắc mắc khách hàng hay hỏi trước khi mua bếp gas và thiết bị.</p>
    </div>
    <div class="faq">
      <details class="faq__item">
        <summary class="faq__q">Mua bếp gas có được giao đến nhà không?</summary>
        <div class="faq__a"><p>Giao hàng phụ thuộc vào loại bếp, số lượng và vị trí của bạn. Hãy gọi cho cửa hàng để xác nhận trước khi đặt, hoặc xem thêm trang <a href="${url('/giao-gas-tan-nha/')}">giao gas tận nhà</a>.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Bếp gas và thiết bị gas giá bao nhiêu?</summary>
        <div class="faq__a"><p>Giá thay đổi theo loại bếp và thiết bị đi kèm, nên cửa hàng không niêm yết giá trên website. Gọi điện để nhận báo giá đúng loại bạn đang quan tâm.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Cửa hàng có bán dây dẫn và van gas thay không?</summary>
        <div class="faq__a"><p>Dây dẫn, van gas và phụ kiện là những món thường xuyên có nhu cầu thay, nhưng danh mục cụ thể theo từng thời điểm thì nên hỏi trước qua điện thoại để cửa hàng xác nhận còn hàng.</p></div>
      </details>
      <details class="faq__item">
        <summary class="faq__q">Bếp đang dùng bị lỗi thì làm sao?</summary>
        <div class="faq__a"><p>Nếu bếp đánh lửa yếu, ngọn lửa không đều hay có dấu hiệu bất thường, hãy ngừng dùng và liên hệ <a href="${url('/sua-chua-bep-gas/')}">sửa chữa bếp gas</a> để được kiểm tra.</p></div>
      </details>
    </div>
  </div>
</section>
`,
};
