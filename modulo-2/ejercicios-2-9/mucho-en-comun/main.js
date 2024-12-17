'use strict';

const form = document.querySelector('.js-form');
const btn = document.querySelector('.js-btn');
let listBooks = [];


function handleForm(ev){
    ev.preventDefault();
    const value = ev.target.value;
    if (listBooks.length === 0){
        listBooks[0] = value; 
    }else{
        listBooks[listBooks.length] = value; 
    };
};

function render(){
    const text = document.querySelector('.js-text');
    for (const book of listBooks){
        text.innerHTML += `¡A mí también me encantó "${book}"!`;
    } 
};

form.addEventListener('change',handleForm);
btn.addEventListener('click', render);