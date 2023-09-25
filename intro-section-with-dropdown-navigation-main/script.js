'use strict';
// VARIABLES
const parentMenuBar = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu__open');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.overlay');

const menuClose = function () {
  menuOpen.classList.toggle('menu__open');
  menuOpen.classList.toggle('menu__close');
}

parentMenuBar.addEventListener('click', function () {
  menuClose();
  overlay.classList.toggle('hidden');

  if (menuOpen.classList.contains('menu__close')) {
    menuOpen.srcset = 'images/icon-close-menu.svg';
    navMenu.classList.add('nav__menu--new');
  } else {
    menuOpen.srcset = 'images/icon-menu.svg';
    navMenu.classList.remove('nav__menu--new');
  }

})