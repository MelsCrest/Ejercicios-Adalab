'use strict';
const adalaber1 = {
    name : "Susana",
    age : 34,
    profession : "periodista",
};

const adalaber2 = {
    name : "Rocío",
    age : 25,
    profession : "actriz"
};


function showBio(adalaber1){
    return `Mi nombres es ${adalaber1.name}, y tengo ${adalaber1.age} años y soy ${adalaber1.profession}.`;
};

function showBio(adalaber2){
    return `Mi nombres es ${adalaber2.name}, y tengo ${adalaber2.age} años y soy ${adalaber2.profession}.`;
};

console.log(showBio(adalaber1));
console.log(showBio(adalaber2));