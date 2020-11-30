var body = document.querySelector('body');
var hamburger = document.querySelector('#hamburger');
var mobileNav = document.querySelector('#mobile-nav');

function toggleMenu () {
  body.classList.toggle('mobile-menu-open');
  hamburger.classList.toggle('is-active');
  mobileNav.classList.toggle('show');
}

hamburger.addEventListener('click', toggleMenu);