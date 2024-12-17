'use strict';

const form = document.querySelector('.js-form');
const btn = document.querySelector('.js-btn');


function handleForm(ev){
    ev.preventDefault();
    const text = document.querySelector('.js-text');
    const value = ev.target.value;
    text.innerHTML += `¡A mí también me encantó "${value}"!`;
}
form.addEventListener('submit', handleForm);
btn.addEventListener('click', handleForm);