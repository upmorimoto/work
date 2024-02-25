let bubbleContainer = document.querySelector(".bubble-container");

const createBubble = () => {
    let bubble = document.createElement("span");
    bubble.className = "bubble";

    minSize = 10;
    maxSize = 60;

    let bubbleSize = Math.random() * (maxSize =- minSize) + minSize;

    bubble.style.width = bubbleSize + "px";
    bubble.style.height = bubbleSize + "px";

    bubble.style.left = Math.random() * 100 + "%";

    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
};

setInterval(createBubble, 100);