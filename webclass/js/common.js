

// sub-list active
const jsMenus = [];
for (let i = 1; i <= 5; i++) {
    let jsMenu = document.getElementById(`jsMenu${i}`); //ここはバッククォーテーションで記述
    jsMenus.push(jsMenu);
}
// console.log(jsMenus);

document.addEventListener("click", (e) => {
    console.log(e.target.id);
    jsMenus.map((jsMenu) => {
        if (e.target.id === jsMenu.id) {
            jsMenu.classList.add("active");
        }else {
            jsMenu.classList.remove("active");
        }
    });
});

//一か所指定の場合　this使用可
// document.getElementById('jsMenu1').addEventListener('click', (e) => {
//     this.classList.add('active')
// });

//slide
new Swiper('.swiper', {
    loop: true,
    slidesPerView: 5,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
        delay: 0
    }
  });