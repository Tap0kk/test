const btnMobMenu = document.querySelector('.js-menu-open');
const mobileMenu = document.querySelector('.js-mobile-menu');
const closeBtn = document.querySelector('.js-mobile-menu-close');
const menuLinks = document.querySelectorAll('.js-nav-link');

window.addEventListener('DOMContentLoaded', () => {
  btnMobMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  //   closeBtn.addEventListener('click', () => {
  //     mobileMenu.classList.remove('active');
  //     document.body.classList.remove('no-scroll');
  //   });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});
const menuBtn = document.querySelector('.mob-menu-btn');
const openBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', function () {
  openBtn.classList.toggle('open');
});
