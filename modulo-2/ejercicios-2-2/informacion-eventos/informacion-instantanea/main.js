'use strict';
// const inputName = document.getElementById('name');
const inputName = document.querySelector('.name');
const paragraph = document.querySelector('p');

inputName.addEventListener("input", (event) => {
    paragraph.innerHTML = event.currentTarget.value;
});
