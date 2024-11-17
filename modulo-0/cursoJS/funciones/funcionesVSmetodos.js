//funciones vs. métodos

//FUNCIONES
//Capacidades que tienen las funciones al igual que otros objetos

//1. Pasar funciones como argumentos -> callback
// function a(){}
// function b(a){}
// b(a)

//2. Retornar funciones -> Declaración de función
// function a(){
//     function b(){}
//     return b
// }

//3. Asignar funciones a variables -> Expresión de función
// const a = function(){}

//4. La funciones pueden tener propiedades y métodos
// function a(){}
// const obj = {}
// a.call(obj)

//5. Anidar funciones -> Nested functions
// function a(){
//     function b(){
//         function c(){
//         }
//         c()
//     }
//     b()
// }
// a()

// MÉTODOS 
// Se almacenan funciones en objetos
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log("🚀");
    }
}

rocket.launchMessage();
