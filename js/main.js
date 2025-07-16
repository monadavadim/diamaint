document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const burger = document.getElementById("burger");
const menu = document.getElementById("header__ul");

burger.addEventListener("click", () => {
  header__ul.classList.toggle("active");
});

$(document).ready(function () {
  $('.product__slider').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        }
      }
    ]
  });
});

new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.stock__left-button-right',
    prevEl: '.stock__left-button-left',
  },
});

new Swiper('.autors__right-slider', {
  thumbs: {
    swiper: ('.autors__slider'),
  }
});

new Swiper('.autors__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 65,
  breakpoints: {
    300: {
      spaceBetween: 5,
      slidesPerView: 3,
    },
  },
});

