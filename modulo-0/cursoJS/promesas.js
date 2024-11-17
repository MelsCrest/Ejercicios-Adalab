//Las promesas permiten que un código pase de síncrono a asíncrono. Las promesas quedan en un estado de espera hasta que el call stack esté vacío y pasen allí para dar un resultado.
//ESTADOS
//Las promesas tienen 3 estados:  1. Pending - Pendiente, se empieza a general la promesa / 2.fullfilled - cuando la promesa se resuelve para a este estado/ 3.rejected - cuando la promesa no se resovío.
//CALLBACKS
//resolve - promesa resulta satisfactoriamente
//reject - la promesa NO se puede resolver.
//MÉTODOS
//then() - se ejecuta cuando la promesa se resuelve.
//catch() - sucede cuando la promesa no se resuelve. Este nos devuelve el error.

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let operationSuccessful = true;
    
//         if(operationSuccessful){
//             resolve("La operacion fue existosa!");
//         } else {
//             reject("Falló la operación");
//         }
//     }, 2000);
// });

// promise
//     .then((successMessage) =>{
//         console.log(successMessage);
//     })
//     .catch((errorMessage) =>{
//         console.log(errorMessage);
//     })

//-------ASYNC AND AWAIT--------
//Otra manera de trabajar de manera asíncrona. 
//El async and await devuelve una promesa. El resultado es el mismo. El código dentro del async and await pasa a la sección de web api, en esta sección trabajará para resolver la promesa (función). Una vez resuelta la devolverá al call stack con el event loop, para poder ejecutar la respuesta de esa promesa.
//Su diferencia con las promesas es que su ejecución es más legible en cuanto a los pasos ejecutados.
//try - codigo que ha de pasar/ catch - maneja el error. Ambos nos permiten manejar los errores.

// function fetchData(){
//     fetch("https://rickandmortyapi.com/api/character")
//     .then((respuesta) => respuesta.json())
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error));
// }
// fetchData();

// async function fetchData(){
//     try {
//         let respuesta = await fetch("https://rickandmortyapi.com/api/character")
//         let data = await respuesta.json();
//         console.log(data);
//     } catch (error){
//         console.log(error);
//     }
// }
// fetchData();

//------------ FOR AWAIT OF -----------
//Para gestionar varias peticiones.
//Es un bucle que va a utilizar un async and await para pasar unas peticiones de forma asíncrona, para que una vez resueltas, regresen al call stack y se vean la respuesta de los datos.

const urls = ["https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
];

async function fetchNewData() {
    try{
        for await (let url of urls) {
            let respuesta = await fetch(url);
            let data = await respuesta.json();
            console.log(data)
        }
    } catch(error){
        console.log(error)
    }   
}