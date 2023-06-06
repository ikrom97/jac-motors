document.querySelector('.page-header__button')
  .addEventListener('click', () =>
    document.body.classList.toggle('menu-shown')
  );

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.body.classList.add('header-sticky')    
    return;
  }
  document.body.classList.remove('header-sticky')
});