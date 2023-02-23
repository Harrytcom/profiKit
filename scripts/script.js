const swiper = new Swiper('.product-slider__inner', {

  speed: 400,
  spaceBetween: 20,

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.product-slider__next',
    prevEl: '.product-slider__prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 4,
});