//SLICE - Crea una copia superficial (shallow copy) de una porción del array, especificada por índices de inicio y fin (fin no incluido). Puede tener uno o dos parámetros, que son los índices de solo inicio si es uno, o inicio y fin si son dos.
//Se pueden usar valores negativos para recorrer un array al revés.
//NO modifica el array original - Inmutabilidad
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());