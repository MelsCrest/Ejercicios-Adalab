//Funciones puras
//Dando la misma entrada obtendremos la misma salida
//No tienen 'efectos secundarios / side effects'

//Side Effects
// 1. Modificar variables globales
// 2. Modificar los parámetros de una función
// 3. Solicitudes 'http'
// 4. Imprimir mensajes en pantalla o consola 
// 5. Manipulación del DOM
// 6. Obtener la hora actual

function sum(a, b){
    return a + b;
}
//---------------
function square(x){
    return x * x;
}
//---------------
function addTen(y){
    return y + 10;
}
//---------------
const number = 5
const finalResult = addTen(square(number))
console.log(finalResult);


//FUNCIONES IMPURAS
// Imprimir mensajes
function sum(a, b){
    console.log('A: ', a);
    return a + b;
}
//Modificar variable global
let total = 0;

function sumWithSideEffect(a){
    total += a;
    return total
}

