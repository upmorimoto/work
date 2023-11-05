// クリックイベント動作（ToggleButtonの場合）
const toggleMenuButton = document.querySelector('.menu');
const toggleCloseButton = document.querySelector('.close');
const headerList = document.querySelector('header .list')

toggleMenuButton.addEventListener('click', () => {
  if (toggleMenuButton.classList.contains('active')) {
    toggleMenuButton.classList.remove('active');
    toggleCloseButton.classList.add('active');
    headerList.classList.add('active');
  } else {
    toggleMenuButton.classList.add('active');
    toggleCloseButton.classList.remove('active');
    headerList.classList.remove('active');
  }
});
toggleCloseButton.addEventListener('click', () => {
  if (toggleCloseButton.classList.contains('active')) {
    toggleCloseButton.classList.remove('active');
    headerList.classList.remove('active');
    toggleMenuButton.classList.add('active');
  } else {
    toggleCloseButton.classList.add('active');
    headerList.classList.add('active');
    toggleMenuButton.classList.remove('active');
  }
});

// 効率よく記述すると

// const toggleMenuButton = document.querySelector('.menu');
// const toggleCloseButton = document.querySelector('.close');

// function toggleActiveClass(element) {
//   if (element.classList.contains('active')) {
//     element.classList.remove('active');
//   } else {
//     element.classList.add('active');
//   }
// }

// toggleMenuButton.addEventListener('click', () => {
//   toggleActiveClass(toggleMenuButton);
//   toggleActiveClass(toggleCloseButton);
// });

// toggleCloseButton.addEventListener('click', () => {
//   toggleActiveClass(toggleCloseButton);
//   toggleActiveClass(toggleMenuButton);
// });

// Scrollイベント（CaptionListの場合）
const targetElements = document.querySelectorAll('.caption');

// スクロール位置を格納するオブジェクト
const scrollPositions = {
  smallScreen: 30,  // スモールスクリーン用のスクロール位置
  mediumScreen: 150, // ミディアムスクリーン用のスクロール位置
  largeScreen: 200   // ラージスクリーン用のスクロール位置
};

// スクロールイベントリスナーを追加
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY || window.pageYOffset;

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
  scrollingElement.style.transform = `translateY(${scrollY / 5}px)`;
});