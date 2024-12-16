'use strict';
const adalaber1 = {
    name : "Susana",
    age : 34,
    profession : "periodista"
};

const adalaber2 = {
    name : "Rocío",
    age : 25,
    profession : "actriz"
};

const adalaberData1 = document.querySelector('.js-adalaber1-data');
const adalaberData2 = document.querySelector('.js-adalaber2-data');
adalaberData1.innerHTML = `Mi nombres es ${adalaber1.name}, y tengo ${
                        adalaber1.age} años y soy ${adalaber1.profession}.`;
adalaberData2.innerHTML = `Mi nombres es ${adalaber2.name}, y tengo ${
                        adalaber2.age} años y soy ${adalaber2.profession}.`;