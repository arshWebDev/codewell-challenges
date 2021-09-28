
// ------------------ mobile menu -------------------- //
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("mobile-menu");
  document.body.classList.toggle("stop-scroll");
})

// -------------------- sticky nav -------------------- //

window.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav");
  
  if (window.pageYOffset >= 110) {
    nav.classList.add("sticky-nav");
  } else if (window.pageYOffset < 110) {
    nav.classList.remove("sticky-nav");
  }
})  