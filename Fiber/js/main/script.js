let menuBtn = document.querySelectorAll('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.forEach(element => {
  element.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    document.body.classList.toggle('stop-scroll');
  })
});