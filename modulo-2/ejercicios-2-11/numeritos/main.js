'use strict';
//PUSH
const numbers = [];
function get100Numbers(){
    for(let i = 1; i <= 100; i++){
        numbers.push(i);
    }
    console.log(numbers);
};

get100Numbers();

//REVERSE
function getReversed100Numbers(){

        console.log(numbers.reverse());
};
getReversed100Numbers();

