//Conversión de tipo explícita - Explicit type Casting
const string = '42';
const integer = parseInt(string);
// console.log(integer);
// console.log(typeof integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
// console.log(float);
// console.log(typeof float);

const binary = '1010';
const decimal = parseInt(binary, 2);
// console.log(decimal);
// console.log(typeof decimal);

//Conversión de tipo implícita - Implicit type Casting
const suma = '5' + 3; //concatena
// console.log(suma);

const sumWithBoolean = '3' + true; //concatena
// console.log(sumWithBoolean);

const sumWithNumber = 2 + true; //al ser un número suma 2 + 1 (a true le da el valor de 1)
// console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
//Los string concatenan
console.log(stringValue + stringValue);
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log('-------------------------');
//Los números se suman, salvo con string que se concatena
console.log(numberValue + numberValue);
console.log(numberValue + stringValue);
console.log(numberValue + booleanValue);
console.log('-------------------------');
//Los boolean se suman, salvo con string que se concatena
console.log(booleanValue + booleanValue);
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);