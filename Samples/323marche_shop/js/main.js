const homeButton = document.querySelector('.home-button');
const close = document.querySelector('.close-button');
const menu = document.querySelector('.menu');

homeButton.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

