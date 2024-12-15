'use strict';

const titleElement = document.querySelector('h1');
const listName1 = document.querySelector('.name1');
const listName2 = document.querySelector('.name2');

titleElement.innerHTML = titleElement.innerHTML + listName2.innerHTML;

