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
        name: "MariCarmen",
        lastName: "Hernández",
        telephone: 658927435,
    }
];

const inputName = document.querySelector('.js-input-name');
const inputLastName = document.querySelector('.js-input-lastname');
const inputTel = document.querySelector('.js-input-tel');

const selectUser = document.querySelector('.js-select-user');

function handleChange(){
    const selectUserValue = selectUser.value;
    
    // if(selectUserValue.toLowerCase() === users[0].name.toLowerCase()){
    //     inputName.setAttribute('value', users[0].name);
    //     inputLastName.setAttribute('value', users[0].lastName);
    //     inputTel.setAttribute('value', users[0].telephone);
    // }else if(selectUserValue.toLowerCase() === users[1].name.toLowerCase()){
    //     inputName.setAttribute('value', users[1].name);
    //     inputLastName.setAttribute('value', users[1].lastName);
    //     inputTel.setAttribute('value', users[1].telephone);
    // }else if(selectUserValue.toLowerCase() === users[2].name.toLowerCase()){
    //     inputName.setAttribute('value', users[2].name);
    //     inputLastName.setAttribute('value', users[2].lastName);
    //     inputTel.setAttribute('value', users[2].telephone);
    // }
    switch(selectUserValue){
        case 'pepi' : 
            inputName.setAttribute('value', users[0].name);
            inputLastName.setAttribute('value', users[0].lastName);
            inputTel.setAttribute('value', users[0].telephone);
        break;
        case 'loli' :
            inputName.setAttribute('value', users[1].name);
            inputLastName.setAttribute('value', users[1].lastName);
            inputTel.setAttribute('value', users[1].telephone);
        break;
        case 'maricarmen' : 
            inputName.setAttribute('value', users[2].name);
            inputLastName.setAttribute('value', users[2].lastName);
            inputTel.setAttribute('value', users[2].telephone);
        break;
    };
};

selectUser.addEventListener('change', handleChange);

