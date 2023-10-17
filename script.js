'use strict';
// VARIABLES
const menuButton = document.querySelector('.menu');
const menu = document.querySelector('.menu__open');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.overlay');

const menuToggle = function (varName) {
  varName.classList.toggle('menu__open');
  varName.classList.toggle('menu__close');
}

menuButton.addEventListener('click', function () {
  menuToggle(menu);
  overlay.classList.toggle('hidden');

  if (menu.classList.contains('menu__close')) {
    menu.srcset = 'images/icon-close-menu.svg';
    navMenu.classList.add('nav__menu--new');
  } else {
    menu.srcset = 'images/icon-menu.svg';
    navMenu.classList.remove('nav__menu--new');
  }
})