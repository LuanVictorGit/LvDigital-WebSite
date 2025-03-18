document.addEventListener("DOMContentLoaded", () => {
    updateTitles(); // init the animations
});

let typingSpeed = 20;
let eraseSpeed = 5;
let pauseBeforeErase = 250;
let pauseAfterTyping = 8000;

function updateTitles() {
    let titles = document.querySelectorAll("*");
    titles.forEach((title, index) => {
        if (!title.classList.contains("animate-title")) return;
        let textTitle = title.textContent.trim();
        title.textContent = "";
        typeAndErase(title, textTitle, index * 20);
    });
}

function typeAndErase(title, textTitle, initialDelay) {
    setTimeout(() => {
        typeTitle(title, textTitle, 0);
    }, initialDelay);
}

function typeTitle(title, textTitle, currentLength) {
    if (currentLength < textTitle.length) {
        title.textContent += textTitle[currentLength];
        setTimeout(() => {
            typeTitle(title, textTitle, currentLength + 1);
        }, typingSpeed);
    } else {
        setTimeout(() => {
            eraseTitle(title, textTitle);
        }, pauseAfterTyping);
    }
}

function eraseTitle(title, textTitle) {
    if (title.textContent.length > 0) {
        title.textContent = title.textContent.slice(0, -1);
        setTimeout(() => {
            eraseTitle(title, textTitle);
        }, eraseSpeed);
    } else {
        setTimeout(() => {
            typeTitle(title, textTitle, 0);
        }, pauseBeforeErase);
    }
}