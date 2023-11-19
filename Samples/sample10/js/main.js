const clickElements = document.querySelectorAll('.caption');
const stepContents = document.querySelectorAll('.step-contents');

function toggleActiveClass(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}

// clickElementsの各要素に対してクリックイベントを追加
clickElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    // クリックされた要素に対応するstepContentsの要素にクラスを切り替える
    toggleActiveClass(element);
    toggleActiveClass(stepContents[index]);
  });
});

//3da scroll

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