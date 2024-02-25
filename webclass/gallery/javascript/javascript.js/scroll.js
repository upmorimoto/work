window.addEventListener("scroll", function () {
    const target = document.getElementById("target");
    window.scrollY;
    if (scrollY > 500) {
      target.style.opacity = "1";
      // console.log(scroll);
    } else {
      target.style.opacity = "0";
      // console.log(scroll);
    }
  });