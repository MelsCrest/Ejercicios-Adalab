//Bucle 'for in'. Para iterar en objetos enumerables como los objetos.
//Por cada elemento o propiedad en este elemento generame este código
//Se aplica en objetos(estructura de datos que consta de propiedades que tienen un valor).
// for (variable in objeto){
//     código a ejecutar
// }

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras){
    console.log(fruta);
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

