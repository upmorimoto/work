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
  
  
  const targets = document.getElementsByClassName('fade');
  for(let i = targets.length; i--;){
   let observer = new IntersectionObserver((entries, observer) => {
    for(let j = entries.length; j--;){
     if (entries[j].isIntersecting) {
      entries[j].target.classList.add('active');
     } else{
      entries[j].target.classList.remove('active');
     }
    }
   });
   observer.observe(targets[i]);
  }