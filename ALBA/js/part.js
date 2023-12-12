const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let cardInnerHeight = card.clientHeight;
        let cardInnerWidth = card.clientWidth;

        let rect = card.getBoundingClientRect();
        let cardXposition = e.clientX - rect.left;
        let cardYposition = e.clientY - rect.top;

        let rotateSpeed = 25;

        let xCustom = 2.5;
        let yCustom = 1.25;

        let x = (cardInnerHeight / xCustom - cardXposition) / rotateSpeed;
        let y = (cardInnerWidth / yCustom - cardYposition) / rotateSpeed;

        card.computedStyleMap.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
    });    
});


