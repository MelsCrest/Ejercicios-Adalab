//Condicional Switch - Hay una expresion o condicion que se va a evaluar mediante unos casos con distintos valores. Se irá evaluando caso a caso hasta que se cumpla uno de ellos.
// switch(expresion){
//     case valor1:
//         código a ejecutar
//         break;
//     case valor2:
//         código a ejecutar
//         break;
//     default:
//         código a ejecutar
// }

let expresion = "Papayas";

switch(expresion){ //switch es un comparador estricto (===)
    case "Naranjas":
        console.log("Las naranjas van fenomenal para zumo.")
        break;
    case "Manzanas":
        console.log("Las manzanas están arenosas.")
        break;
    case "Papayas":
    case "Plátanos":
        console.log("Las papayas y los plátanos están en el pasillo 3.")
        break;
    case "Uvas":
        console.log("Las uvas para año nuevo.")
        break;
    default:
        console.log(`Lo siento no tenemos ${expresion}. Prueba en otro súper.`)
}