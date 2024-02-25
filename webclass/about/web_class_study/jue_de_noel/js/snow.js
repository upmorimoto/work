let snowContainer = document.querySelector(".home");

const createSnow = () => {
    let snow = document.createElement("span");
    snow.className = "snow";

    minSize = 10;
    maxSize = 40;

    let snowSize = Math.random() * (maxSize =- minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    snow.style.left = Math.random() * 100 + "%";

    snowContainer.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 20000);
};

setInterval(createSnow, 100);