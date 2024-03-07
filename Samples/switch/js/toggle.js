// Clickイベント
window.addEventListener('load', function () {
  const $button = document.querySelector('.toggle');
  const $menu = document.querySelector('.menu-list');
  $button.addEventListener('click', () => {
      if ($menu.classList.contains('show')) {
          $menu.classList.remove('show');
          $button.classList.remove('show');
      }
      else {
          $menu.classList.add('show');
          $button.classList.add('show');
      }
      
  });
});

// Smooth scroll 
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

  // FADE
  const targets = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  });
  
  targets.forEach(target => {
    observer.observe(target);
  });

  // CARD description
  // すべての親要素を取得
  const cards = document.querySelectorAll('.card');

// 各カードに対してイベントリスナーを追加
  cards.forEach(function(card) {
    // カード内の close ボタンを取得
    const closeButton = card.querySelector('.description .close');

    // カードの description 要素を取得
    const description = card.querySelector('.description');

    // カードがクリックされたときの処理
    card.addEventListener('click', function() {
      // description が存在する場合にのみ active クラスを追加
      if (description) {
          description.classList.add('active');
      }
    });

    // close ボタンがクリックされたときの処理
    if (closeButton) {
        closeButton.addEventListener('click', function(event) {
            // 親要素のクリックイベントを停止する
            event.stopPropagation();
            // description の active クラスを削除
            description.classList.remove('active');
        });
    }
});
