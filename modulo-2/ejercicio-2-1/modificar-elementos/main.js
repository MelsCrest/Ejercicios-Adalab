'use strict';

document.querySelector('p').innerHTML = 'Hola Mundo';

const titleElement = document.querySelector('h1');
const listName1 = document.querySelector('.name1');
const listName2 = document.querySelector('.name2');

titleElement.innerHTML = titleElement.innerHTML + listName2.innerHTML;

let content = '<h1>Lorem ipsum</h1> <img src="http://via.placeholder.com/350x150"/> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

document.querySelector('.box').innerHTML = content;