document.querySelector('.page-header__button')
  .addEventListener('click', () => document.body.classList.toggle('menu-shown'));

document.querySelector('.main-logo')
  .addEventListener('click', () => window.location.href = '/');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.body.classList.add('header-sticky')
    return;
  }
  document.body.classList.remove('header-sticky')
});

new Swiper('.banner', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

new Swiper('.swiper-models', {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.test-drive')) {
    document.body.classList.add('modal-shown');
  }
  if (evt.target.closest('.modal__close') || evt.target.tagName === 'DIALOG') {
    document.body.classList.remove('modal-shown');
  }
});

document.querySelector('.modal__form')
  .addEventListener('submit', (evt) => {
    evt.preventDefault();
    document.body.classList.remove('modal-shown');
  });
