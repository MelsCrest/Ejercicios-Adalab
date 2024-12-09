'use strict';
const inputName = document.getElementById('name');
const paragraph = document.querySelector('p');

inputName.addEventListener("input", (event) => {
    paragraph.innerHTML = event.currentTarget.value;
});
