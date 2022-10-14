// Mobile menu toggle
let navMain = document.querySelector('.header__navigation');
let navToggle = document.querySelector('.header__navigation-button');
let mainBody = document.querySelector('.body');

mainBody.classList.remove('body--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__navigation--closed')) {
    navMain.classList.remove('header__navigation--closed');
    navMain.classList.add('header__navigation--opened');
  } else {
    navMain.classList.add('header__navigation--closed');
    navMain.classList.remove('header__navigation--opened');
  }
});
