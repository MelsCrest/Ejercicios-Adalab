'use strict';
const message = document.querySelector('.message');

submit.addEventListener("click", () => {
    const valor = document.getElementById('name').value;

    message.innerHTML += valor;
});
