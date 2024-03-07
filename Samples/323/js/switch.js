function changeSlider(n) {
  document.querySelectorAll('.slider').forEach(function(slider) {
    slider.style.display = 'none';
  });
  document.getElementById(`slider${n}`).style.display = 'block';
}

function changeSlide(n, sliderNumber) {
  const slider = document.getElementById(`slider${sliderNumber}`);
  const slides = slider.querySelector('.slides');
  const slideWidth = slides.offsetWidth; // 1枚の画像の幅を取得
  let newPosition = slides.scrollLeft + slideWidth * n;

  // スクロール位置が最後の画像よりも右にある場合、最初の画像に戻る
  if (newPosition > slides.scrollWidth - slideWidth) {
    newPosition = 0;
  }

  slides.scrollTo({
    left: newPosition,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.prev, .next').forEach(function(button) {
    button.addEventListener('click', function() {
      const direction = this.classList.contains('prev') ? -1 : 1;
      const sliderNumber = this.closest('.slider').id.replace('slider', '');
      changeSlide(direction, sliderNumber);
    });
  });
});
