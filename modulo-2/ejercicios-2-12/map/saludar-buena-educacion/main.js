'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const welcome = names.map((name)=>'Bienvenida ' + name);
console.log(welcome);

for(let hi of welcome){
    console.log(hi);
}