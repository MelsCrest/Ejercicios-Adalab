//Métodos que iteran sobre un array.
//Métodos que NO modifican el array original - Inmutabilidad

//FILTER - Crea un nuevo array con elementos que cumplen una condición dada por una función.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0 );

console.log(numbers);
console.log(evenNumbers);

//REDUCE - Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
//Caso 1
const numberReduce = [1, 2, 3, 4, 5];
const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numberReduce);
console.log(sum);

//Caso 2
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];
const repitedWord = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){
    accumulator[currentValue]++;
    }else{
        accumulator[currentValue] = 1;
    }
    return accumulator
}, {})
console.log(repitedWord);
