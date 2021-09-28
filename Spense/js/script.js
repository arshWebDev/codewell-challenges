const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('menu-open');
  document.body.classList.toggle("stop-scrolling")
})

const closeBtn = document.querySelector('.close-btn');
const announcement = document.querySelector('.announcement');

closeBtn.addEventListener('click', () => {
  announcement.style.display = 'none';
})