//Cómo crear un Array?
//1. new Array() or Array()
const fruits = Array('apple', 'orange', 'banana');
console.log(fruits);

const justOneNumber = Array(12); //No imprimer el nº, pero si crea 12 espacios vacios dentro del array
console.log(justOneNumber);

const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers);

//2. Array sintaxis literal
const oneNumber = [4]; //solo con corchetes se puede crear un array
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports);

const recipeIngredients = ['Flour', true, 2, {ingredient: 'Milk', quantity: '1 cup'}, false]

console.log(recipeIngredients);

//Accediendo a los elementos de un array
const firstFruit = fruits[0];
console.log(firstFruit);

//Tamaño de un array
const numberOfFruits = fruits.length;
console.log(numberOfFruits);

//Mutabilidad
fruits.push('watermelon'); //agregamos nuevo valor al final del array
console.log(fruits);

//Inmutabilidad
const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits);
console.log(newFruits);

//Comprobando si un array es un array con Array.isArray()
const isArray = Array.isArray(fruits);
console.log(isArray);

//Ejercicio práctico: suma de todos los elementos de un array
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for(let i=0; i < numbersArray.length; i++){
    sum += numbersArray[i];
}
console.log(sum);


