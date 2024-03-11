// window.addEventListener('scroll', function(){
//     // スクロール量を取得
//     const scroll = window.scrollY;
//     // 画面の高さを取得
//     const windowHeight = window.innerHeight;
//     // すべての.boxを取得
//     const boxes = document.querySelectorAll('.box');
  
//     boxes.forEach(function(box) {
//       // boxまでの高さを取得
//       const distanceToBox = box.offsetTop;
//       // 下記条件が成り立つときだけboxにis-activeクラスを付与する
//       if(scroll + windowHeight > distanceToBox) {
//         box.classList.add('active');
//       }
//     });
//   });


  // window.addEventListener('scroll', () => {
  //   const scroll = window.scrollY;
  //   const windowHeight = window.innerHeight;
    
  //   document.querySelectorAll('.box').forEach(box => {
  //     if (scroll + windowHeight > box.offsetTop) {
  //       box.classList.add('active');
  //     }
  //   });
  // });
  







// // 距離を測りたい要素を全て取得
// const scrollAppears = document.querySelectorAll(".box");


// // 画面（ブラウザ）の高さを取得
// const windowHeight = window.innerHeight;

// for ( let index = 0; index < scrollAppears.length; index++ ) {
//     // body要素の上端から要素までの距離をoffsetTopで測り、elementDistanceに格納
//     const elementDistance = scrollAppears[index].offsetTop;


//     // スクロールイベントの設定
//     window.addEventListener("scroll", () => {
//         // 現在の縦方向のスクロール位置を変数 y に格納
//         let y = window.scrollY;
//         // offsetTopの数値からブラウザの高さ÷2を引いた値に達したら"active"のclassを追加
//         if ( y >= elementDistance - ( windowHeight / 2  ) ) {
//             scrollAppears[index].classList.add("active");
//         }
//     });
// }



// const scrollAppears = document.querySelectorAll(".box");
// const windowHeight = window.innerHeight;

// scrollAppears.forEach((element) => {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY >= element.offsetTop - (windowHeight / 2)) {
//       element.classList.add("active");
//     }
//   });
// });




const targets = document.querySelectorAll('.box');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } 
      else {
        entry.target.classList.remove('active');
      }
    });
  });
  targets.forEach(target => {
    observer.observe(target);
  });
