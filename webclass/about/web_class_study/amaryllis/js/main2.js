

$(function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $(function() {
      $('.slider').slick({
        autoplay: true, // 自動再生ON
        dots: true, // ドットインジケーターON
        adaptiveHeight: true,
        centerMode: true, // 両サイドに前後のスライド表示
        centerPadding: '50px', // 左右のスライドのpadding
        slidesToShow: 1, // 一度に表示するスライド数
      });
    });

  } else {
    $(function() {
      $('.slider').slick({
        autoplay: true, // 自動再生ON
        dots: true, // ドットインジケーターON
        adaptiveHeight: true,
        centerMode: true, // 両サイドに前後のスライド表示
        centerPadding: '100px', // 左右のスライドのpadding
        slidesToShow: 3, // 一度に表示するスライド数
      });
    });
  }
})