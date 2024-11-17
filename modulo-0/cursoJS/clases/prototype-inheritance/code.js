//La propiedad 'prototipo' solo existe en funciones de objetos (clases, funciones constructoras).
//En métodos y propiedades los prototipos tendrán estos mismos métodos y propiedades de las clases/funciones constructoras. Para que cuando alguna de las instancias u otra clase que extienda de la clase principal, nos aseguramos que se puedan compartir los métodos y propiedades.
//Se crea por defecto.
class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log("El animal emite un sonido");
    }
}
// herencia -  'extends' - puedes utilizar los métodos y propiedades de una clase que ya existe para no tener que replicarlo.
class Perro extends Animal{
    constructor(nombre, tipo, raza){
        super(nombre, tipo);//con 'super' llamamos al constructor de la clase 'padre' cuyos parámetros queremos se repitan.
        this.raza = raza;
    }
    emitirSonido(){
        console.log('El perro hace guau.');
    }
    correr(){
        console.log(`${this.nombre} corre que te cagas.`);
    }
}

const perro1 = new Perro("Chuchi", "Perro", "Galgo");
console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function(){
    console.log("Este es un método");
}
Perro.prototype.segundoMetodo = function(){
    console.log('Es otro método');
}
//cadena de prototipo - como los objetos están interconectados y podamos acceder a sus propiedades y métodos.
//Todas las clases extienden de Object(). En este caso Object() -> Animal -> Perro -> perro1