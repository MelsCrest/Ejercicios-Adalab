//Métodos que iteran sobre un array.
//Métodos que NO modifican el array original - Inmutabilidad

//MAP - Permite aplicar una función a cada elemento de un array y construir un nuevo array con los resultados.
/*const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num*num)

console.log(numbers)
console.log(squaredNumbers);*/

//FOR EACH - Itera sobre cada elemento de un array y ejecuta una función proporcionada para cada elemento, sin crear un nuevo array.

const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));

console.log(colors);
console.log(iteratedColors);

//Ejercicio: Farenheit to Celsius conversion
const temperaturesFahrenheit = [32, 68, 95, 104, 212];
const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => (5/9)*(fahrenheit-32))

console.log(temperaturesFahrenheit);
console.log(temperaturesCelsius);

//Ejercicio: Suma de todos los elementos de un array
const newNumbers = [1, 2, 3, 4, 5];
let sum = 0;
newNumbers.forEach(number => {sum += number});
console.log(newNumbers);
console.log(sum);