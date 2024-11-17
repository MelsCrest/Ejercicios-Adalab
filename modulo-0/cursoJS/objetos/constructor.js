/*
const persona = {
    nombre: 'Paco',
    apellido: 'Pérez'
}
*/
//Función constructora - su objetivo es construir objetos. Se ha de escribir en mayúscula.

function Personas(nombre, apellido, edad){
    this.nombre = nombre; //this.nombre (propiedad del objeto) - nombre(parámetro que se va a pasar)
    this.apellido = apellido;
    this.edad = edad;
}

//generar una instacia (todos los objetos que vengan de la función constructora)
const persona1 = new Personas('Juan', 'Pulido', 30);
console.log(persona1);

const persona2 = new Personas('Patricia', 'Granados', 27);
console.log(persona2);

//Añadir propiedad constructora. PROTOTYPE - copia de la función constructora que se encarga de  cada una de las propiedades o métodos que existen en mi función
Personas.prototype.telefono = '777-777-777';

persona1.nacionalidad = "Española"; //Aquí solo añadimos la propiedad a la instancia de persona1 no a la función constructora

Personas.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
};
persona1.saludar();
persona2.saludar();