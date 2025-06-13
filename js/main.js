$(document).ready(function () {
  $('.slider__product').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    centerMode: true,
  });
});

$('.burger').on('click', function (e) {
  e.preventDefault()
  $('.header__ul').toggleClass('header__ul--open')
});
