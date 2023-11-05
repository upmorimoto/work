window.addEventListener('DOMContentLoaded', (event) => {
  // classが"sen"の要素を取得
  const senElements = document.querySelectorAll('.sen');

  // アニメーションを実行する関数
  function animateElements() {
      senElements.forEach((senElement) => {
          // ランダムな座標を生成
          const randomX = Math.random() * (window.innerWidth - 100); // 400はセクションの幅
          const randomY = Math.random() * (window.innerHeight - 100); // 200はセクションの高さ

          // 要素をランダムな座標に配置
          senElement.style.left = `${randomX}px`;
          senElement.style.top = `${randomY}px`;
      });

      // アニメーションを再帰的に実行
      requestAnimationFrame(animateElements);
  }

  // アニメーションの更新間隔を調整
  const animationInterval = 1000 / 5; // 5フレーム/秒に設定（5秒ごとに要素がランダムに配置）

  // 初回のアニメーション開始
  setTimeout(function() {
      animateElements();
  }, animationInterval);
});