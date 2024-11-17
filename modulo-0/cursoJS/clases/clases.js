// Es un molde a partir del cuál se generarán diferentes objetos. Parecido a una función constructora, pero con una sintaxis distinta.
class Persona{
    constructor(nombre, edad){//se rellenará con argumentos
        this.nombre = nombre;
        this.edad = edad;
    } 
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}.`);
    }
}

//Instancias
const persona1 = new Persona('Juan', 50);
const persona2 = new Persona('Mariana', 25);

persona1.saludar();
persona2.saludar();