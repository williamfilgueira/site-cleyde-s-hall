// abre e fecha o menu

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// quando clicar em um link esconder menu

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

// MUDAR O HEADER DA PAGIGA QUANDO SCROLLAR A PAGE

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// CARROSEL SWIPER

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        setWrapperSize: true
      }
    }
});

// SCROOL REVIEW

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 800,
  reset: true,
});

scrollReveal.reveal(
  `#home .text, #home .image, #about .image, #about .text, #services header, #services .card, #testemonial header, #testemonial .testemonial,
  #contact .text, #contact .links`,
  { interval: 100 }
);
