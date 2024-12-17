'use strict';
const numbers = [2, 8, 5, 9, 3];
numbers[5] = 4;
let acc = 0;

// for(let i = 0; i<numbers.length; i++){
//     acc += numbers[i];
// };

// let media = parseFloat(acc/numbers.length);
// console.log(`La media es ${media}`);

function average(numbers){
    for(let i = 0; i<numbers.length; i++){
        acc += numbers[i];
    }
    let media = parseFloat(acc/numbers.length);
    console.log(media);
};
average(numbers);