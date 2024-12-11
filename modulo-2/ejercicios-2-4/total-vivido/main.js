'use strict';

const send = document.querySelector('.js-btn-submit');
const result = document.querySelector('.js-result');



send.addEventListener('click', (event)=>{
    event.preventDefault();

    const age = parseInt(document.querySelector('.js-input-age').value);

    const hoursYear = 24*365;
    const hoursAge = hoursYear * age;
    
    result.innerHTML = `Has vivido ${hoursAge} horas.`;
});