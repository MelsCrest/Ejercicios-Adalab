'use strict';

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

button1.addEventListener("click", () => {
    button1.classList.toggle("button");
});

button2.addEventListener("click", () => {
    button2.classList.toggle("button");
});