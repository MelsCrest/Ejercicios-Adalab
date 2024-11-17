//SPREAD OPERATOR (...) - Copia arrays, combina arrays, crea arrays con elementos adicionales y puede pasar parámetros a una función.

// 1. Copia - Util para realizar una copia y no mutar el array original
const originalArray = [1, 2, 3, 4, 5];
const copyArray = [...originalArray]

console.log(originalArray); //1, 2, 3, 4, 5
console.log(copyArray); //1, 2, 3, 4, 5

//2. Combinación - Une los datos de dos arrays distintos creando uno nuevo con todos ellos.
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const combinedArray = [...arrayOne, ...arrayTwo];

console.log(arrayOne); //1, 2, 3
console.log(arrayTwo); //4, 5, 6
console.log(combinedArray); //1, 2, 3, 4, 5, 6

//3. Crear arrays con elementos adicionales - al array original se le pueden agregar cualquier tipo de datos nuevos.
const baseArray = [1, 2, 3];
const arrayAdditionalElements = [...baseArray, 4, 5, 6];

console.log(baseArray); //1, 2, 3
console.log(arrayAdditionalElements); //1, 2, 3, 4, 5, 6

//4. Pasar elementos a funciones
function sum (a, b, c){
    return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); //6