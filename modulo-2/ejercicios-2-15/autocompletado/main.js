"use strict";

const users = [
    {
        name: "Pepi",
        lastName: "González",
        telephone: 658927435,
    },
    {
        name: "Loli",
        lastName: "Peréz",
        telephone: 658927435,
    },
    {
        name: "Mari Carmen",
        lastName: "Hernández",
        telephone: 658927435,
    }
];

const inputName = document.querySelector('.js-input-name');
const inputLastNAme = document.querySelector('.js-input-lastname');
const inputTel = document.querySelector('.js-input-tel');

const selectUser = document.querySelector('.js-select-user');
const nameUser = 'Paqui'; 
function handleChange(){
    const selectUserValue = selectUser.value;
    
    if(selectUserValue === 'pepi'){
        const newContentName = document.createTextNode(users[0].name);
        inputName.appendChild(newContentName);
    }
};

selectUser.addEventListener('change', handleChange);

