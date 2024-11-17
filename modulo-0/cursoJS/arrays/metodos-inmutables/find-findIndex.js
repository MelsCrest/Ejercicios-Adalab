//Métodos que iteran sobre un array.
//Métodos que NO modifican el array original - Inmutabilidad

//FIND - Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const multipleFive = [5, 10, 15, 20]
const firstNumberGreaterTen = multipleFive.find(number => number>10);

console.log(multipleFive);
console.log(firstNumberGreaterTen);

//FINDINDEX - Devuelve el índice del primer elemento en un array que satisface una condición proporcionada en forma de función. Si no encuentra ningún elemento que cumpla la condición, devuelve -1.
const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 50);

console.log(randomNumber);
console.log(indexNumber);