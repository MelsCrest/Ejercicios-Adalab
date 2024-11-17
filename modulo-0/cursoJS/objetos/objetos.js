// Los objetos son estructuras de datos que ayudan a guardar valores(key/value) de manera particular. Tienen propiedades y estas a su vez valores.
//Los métodos son funciones dentro de objetos que ayudan a generar la interacción.

// objeto{
//     propiedad: valor,
//     propiedad: valor,
//     propiedad: valor
//     Metodos
// }

const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Pez 2',
        ciudad: 'Pamplona'
    },
    saludar(){
        console.log(`Holi, mi nombre es ${persona.nombre}.`);
    }
}
