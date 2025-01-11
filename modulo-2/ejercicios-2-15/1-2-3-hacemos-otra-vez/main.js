'use strict';
const numbers = [1, 2, 3];
const numbersList = document.querySelector('.js-number-list'); //ul en el HTML

const newLi = document.createElement('li');//li en JS
for(let i = 0; i<numbers.length; i++){
const newContent = document.createTextNode(numbers[i]);//contenido en JS
newLi.appendChild(newContent); //meter contenido dentro de li
numbersList.appendChild(newLi); //meter li con contenido dentro de la ul
};







