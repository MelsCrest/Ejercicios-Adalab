'use strict';

function multiplicacion(a, b){
    const result = a * b;
    return result;
}
//console.log(multiplicacion(3,7));
//console.log(multiplicacion(5,2));
console.log(multiplicacion(4,6));

function media(a, b, c, d){
    const sum = a + b + c + d;
    const media = sum / 4;
    return media;
}
// console.log(media(6, 8, 5, 3));
// console.log(media(4, 2, 1, 9));
console.log(media(1, 3, 4, 4));

function modulo(a){
    const result = a % 2;
    if(result === 0){
        return true;
    }else{
        return false;
    }
}

// console.log(modulo(3));
if(modulo(3) == false){
    console.log('impar');
}else{
    console.log('par');
}