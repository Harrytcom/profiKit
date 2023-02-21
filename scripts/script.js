const swiper = new Swiper('.swiper', {

  speed: 400,
  spaceBetween: 20,

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 4,
});