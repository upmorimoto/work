document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("scrollContainer");
    const items = carousel.getElementsByClassName("banner-list");
    const leftButton = document.getElementById("left-outlined");
    const rightButton = document.getElementById("right-outlined");
    let currentIndex = 0;
  
    function showCurrentItem() {
      // すべての要素からshowクラスを削除
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("show");
      }
      // 現在のインデックスの要素にshowクラスを付加
      items[currentIndex].classList.add("show");
    }
  
    leftButton.addEventListener("click", function () {
      // 前の要素を表示
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showCurrentItem();
    });
  
    rightButton.addEventListener("click", function () {
      // 次の要素を表示
      currentIndex = (currentIndex + 1) % items.length;
      showCurrentItem();
    });
  
    // 初期状態で最初の要素を表示
    showCurrentItem();
  });
  