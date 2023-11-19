// クリックイベント動作（ToggleButtonの場合）
const toggleMenuButton = document.querySelector('.menu');
const toggleCloseButton = document.querySelector('.close');
const headerList = document.querySelector('header .list');
const bubbleClick = document.querySelector('.css-container .bubble2');
const sliderAnimation = document.querySelector('.css-container h2');
const sliderAnimationText = document.querySelector('.css-container .text');
const pieceClick = document.querySelector('.piece');
const sliderBubble = document.querySelector('.css-container .bubble');

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


// Scrollイベント（CaptionListの場合）
const targetElements = document.querySelectorAll('.caption');

// スクロール位置を格納するオブジェクト
const scrollPositions = {
  smallScreen: 30,  // スモールスクリーン用のスクロール位置
  mediumScreen: 100, // ミディアムスクリーン用のスクロール位置
  largeScreen: 100   // ラージスクリーン用のスクロール位置
};

// スクロールイベントリスナーを追加
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  // メディアクエリに基づいて適切なスクロール位置を選択
  let scrollPosition;
  if (window.matchMedia("(max-width: 768px)").matches) {
    scrollPosition = scrollPositions.smallScreen;
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    scrollPosition = scrollPositions.mediumScreen;
  } else {
    scrollPosition = scrollPositions.largeScreen;
  }

  // ループで各要素のスクロール位置をチェック
  targetElements.forEach((element) => {
    if (currentScrollPosition >= scrollPosition) {
      element.classList.add('highlighted');
    } else {
      element.classList.remove('highlighted');
    }
  });
});

const scrollingElement = document.getElementById('scrollingElement');

// スクロール時のイベントリスナーを追加
window.addEventListener('scroll', () => {
  // 現在のスクロール位置を取得
  const scrollY = window.scrollY;

  // スクロール位置に応じてtranslateプロパティを設定
  scrollingElement.style.transform = `translateY(${scrollY / 6.5}px)`;
});