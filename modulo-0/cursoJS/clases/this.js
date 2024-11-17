/*Palabra reservada. Se usa en clases y funciones constructoras.
Hace referencia al objeto mismo o a la clase.
Tenemos referencia de los parémetros del construtor(método dentro de la clase), para que cuando queramos acceder a ellos desde nuestra instancia, el valor de las propiedades de nuestro constructor puedan existir en nuestro objeto.
this --- class
this --- objeto -- class
*/
class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona('Alice', 25);
console.log(persona1);

persona1.nuevoMetodo = function(){
    console.log(`Mi nombre es ${this.nombre}`);
}
persona1.nuevoMetodo();