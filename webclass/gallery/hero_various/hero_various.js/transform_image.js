const inner = document.querySelector(".message2"),
    texts = document.querySelector(".message2").textContent,
    splits = texts.split(""),
    textsArray = [];

    inner.textContent = "";

    for (let j = 0; j < splits.length; j ++) {
        const t = splits[j];
        if (t === " ") {
            textsArray.push(" ");
        }else {
            textsArray.push('<span style="animation-delay: ' + (j*.2) + 's;">' + t + '</span>');
        }
    }

    for (let k = 0; k < textsArray.length; k++) {
        inner.innerHTML += textsArray[k];
    }
    
