//TIPOS DE DATOS

// 1 - PRIMITIVOS
// string
let nombre = 'Tere';
// number
let edad = 25;
// boolean
let mayorEdad = true;
// null - indican un vacío. Ayudan a saber si hay o no valor.
let noHayValor = null;
// undefined - indica un vacío. Suele aparecer por defecto cuando un valor no esta definido.
let noDefinido = undefined;
// symbol - indica un valor único, como el id de un usuario.
let simboloUnico = Symbol('único');
// bigint - para guardar datos grandes en cuanto a números.
let numeroGrande = 2n;

// 2 - COMPLEJOS
// object
let coche = {
    marca: 'Hyundai',
    modelo: 'i20'
};
// array
let frutas = ['plátano', 'manzana', 'kiwi'];

// funciones
function saludar(){}