// クリックイベント動作（ToggleButtonの場合）
const toggleMenuButton = document.querySelector('.menu');
const toggleCloseButton = document.querySelector('.close');
const headerList = document.querySelector('header .list');

// 効率よく記述すると
function toggleActiveClass(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}

toggleMenuButton.addEventListener('click', () => {
  toggleActiveClass(toggleMenuButton);
  toggleActiveClass(toggleCloseButton);
  toggleActiveClass(headerList);
});

toggleCloseButton.addEventListener('click', () => {
  toggleActiveClass(toggleCloseButton);
  toggleActiveClass(toggleMenuButton);
  toggleActiveClass(headerList);
});


bubbleClick.addEventListener('click', () => {
  toggleActiveClass(sliderAnimation);
  toggleActiveClass(sliderAnimationText);
});

pieceClick.addEventListener('click', () => {
  toggleActiveClass(sliderBubble);
});



