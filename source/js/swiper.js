import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  loop: true,
  autoHeight: true,
  touchRatio: 1,
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
