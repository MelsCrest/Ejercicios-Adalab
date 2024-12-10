'use strict';

const btnAccess = document.querySelector('.js-btn-access');
const span = document.querySelector('.js-span');

btnAccess.addEventListener('click', ()=>{
    const nameUser = document.querySelector('.js-input-name').value;
    nameUser === 'Maria' || nameUser === 'Luisa' ? span.innerHTML = `Bienvenida, ${nameUser}.` : span.innerHTML = "Lo siento pero la usuaria que has introducido no está registrada.";
});
