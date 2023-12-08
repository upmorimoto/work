//3da scroll

// scroll Speed
  // スクロール速度の設定
  document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll3d');
    const scrollSpeed = -5; // 速度の調整
  
    let lastScrollTop = 0;
  
    scrollContainer.addEventListener('scroll', function() {
      const st = scrollContainer.scrollTop;
      const delta = st - lastScrollTop;
      lastScrollTop = st;
  
      // スクロール速度を制御
      scrollContainer.scrollTop += delta * scrollSpeed;
    });
  });
  

// scroll Action
const zSpacing = -1000;
let lastPos = zSpacing / 5;
const frames = Array.from(document.getElementsByClassName('frame'));
const zVals = [];

window.onscroll = function() {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;

  lastPos = top;

  frames.forEach(function(frame, i) {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -5;

    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0; // セミコロンを追加

    // スタイルの設定を修正
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

// スクロール
window.scrollTo(0, 1);

// 横スクロール

// const scrollElement = document.querySelector("#scrollX");

// scrollElement.addEventListener("wheel", (e) => {
//   if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

//   const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

//   if (
//     (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
//     (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
//   )
//     return;

//   e.preventDefault();
//   scrollElement.scrollLeft += e.deltaY;
// });