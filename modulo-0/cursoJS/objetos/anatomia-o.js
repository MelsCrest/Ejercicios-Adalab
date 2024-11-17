/*
Estructura de dato

key/ value

objeto{
    propiedad: valor,
    propiedad: valor,
    propiedad: valor

    metodos()
}
*/

const persona = {
    nombre: 'Paqui',
    edad: 40,
    direccion: {
        calle: 'Avenida Del Socorro 4',
        ciudad: 'Logroño'
    },
    saludar(){
        console.log(`Holi, mi nombre es ${persona.nombre}`)
    }
};

//console.log(persona); //muestra todo las propiedades y métodos del objeto
persona.saludar(); // devuelve la frase del saludo

//AGREGAR NUEVAS PROPIEDADES Y MÉTODOS AL OBJETO
//agregamos nueva propiedad al objeto
persona.telefono = '659-768-598'; 
//console.log(persona.telefono);

//agregamos nuevo método al objeto
persona.despedir = () => { 
    console.log('Hasta luego flan de huevo.');
}

persona.despedir();
//console.log(persona);

//ELIMINAR NUEVAS PROPIEDADES Y MÉTODOS AL OBJETO
//Eliminamos esta propiedad
delete persona.telefono;
//console.log(persona);

//Eliminamos este método
delete persona.despedir;
console.log(persona);
