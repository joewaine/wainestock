// script for the dynamic menu

const button = document.getElementById('menu-button');
const menuUL = document.getElementById('menuUL');

button.addEventListener('click', function(){
  if (menuUL.classList.contains('is-active')) {
    menuUL.classList.remove('is-active')
  } else menuUL.classList.add('is-active');
});

