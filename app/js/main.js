$(function () {
  $('.slider-top__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    pauseOnDotsHover: true,
    autoplay: true,
    autoplaySpead: 3000
  })



  var mixer = mixitup('.products__list');
  var mixer2 = mixitup('.design__list', {
      selectors: {
      target: '[data-ref="mix"]'
  }
  });

})