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