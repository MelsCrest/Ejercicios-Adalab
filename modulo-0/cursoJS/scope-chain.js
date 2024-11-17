//Scope-chain o cadena de alcance
//Contexto Global. Todo lo que se encuentra fuera de un bloque de código (funciones, bucles...). No puede acceder a información que se encuentre en un contexto local.
/*const userPoints = 150;
    //Contexto Local. Puede acceder a información global, pero no a otra información local.
    function checkAccess(){
        if(userPoints < 100){
            const message = "Access denied: Insufficient points!"
            return message;
        } else {
            const message = "Access granted: Enjoy the premium features!"
            return message;
        }
    }
console.log(checkAccess());*/
//--------------------------------------------
const globalVariable = '😊';

function localOne(){
    console.log('GLOBAL 1: ', globalVariable);

    function localTwo(){
        const carrot = '🥕';
        console.log('GLOBAL 2: ', carrot);
    }

    function localThree(){
        console.log('GLOBAL 3: ', carrot);
    }

    localTwo();
    // localThree(); //Un contexto local no puede acceder a otro contexto local. Si lo llamamos dará error.
}
console.log(localOne());