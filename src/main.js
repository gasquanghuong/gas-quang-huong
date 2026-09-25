// JS tối giản cho trang tĩnh: bật/tắt menu mobile. Không thư viện ngoài.
const toggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('#site-nav');
const header = document.querySelector('.site-header');

if (toggle && nav) {
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    toggle.textContent = open ? '✕' : '☰';
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  // Đóng menu khi bấm Escape (menu đang mở) và đưa focus về nút toggler.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Click ra ngoài header -> đóng menu đang mở.
  document.addEventListener('click', (e) => {
    if (header && isOpen() && !header.contains(e.target)) setOpen(false);
  });
}
