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

  slidesPerView: 'auto',

  breakpoints: {
    1570: {
      slidesPerView: 4,
    },
  }
})

const footers = document.querySelectorAll('.card__footer-js')

footers.forEach(footer => {
  const input = footer.querySelector('.stepper__input-js')

  footer.addEventListener('click', function (event) {
    if (event.target.classList.contains('stepper__arrow--up-js')) {
      input.value++
    } else if (event.target.classList.contains('stepper__arrow--down-js')) {
      input.value = +input.value > 0 ? +input.value - 1 : 0
    }
  })
  
  // footer.addEventListener('click', function (event) {
  //   if (event.target.classList.contains('card__button')) {
  //     input.value++
  //   }
  // })
})