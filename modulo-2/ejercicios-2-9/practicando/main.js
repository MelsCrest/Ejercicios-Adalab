'use strict';
// for(let i=1; i<=10; i++){
//     console.log("Voy por la vuelta: " + i);
// };

let acc = 0;
for(let i = 0; i < 10; i++){
    acc += i + 2;
    console.log(acc);
};
console.log(`El resultado es ${acc}`);