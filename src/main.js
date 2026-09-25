// JS tối giản cho trang tĩnh: bật/tắt menu mobile. Không thư viện ngoài.
const toggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Mở menu' : 'Đóng menu');
    toggle.textContent = open ? '☰' : '✕';
    nav.classList.toggle('is-open', !open);
  });
}
