/*
CLOSURE: función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse.
- Permite flexibilidad en el código. Pero tiene 'problemas' de almacenamiento en memoria.
Ambito léxico: cada vez que se declara una función, crea su propio ámbito léxico, y puede accedet a las variables dentro de ese ámbito y a las variables en ámbitos superiores.*/

function outerFunction(){
    let outerVariable = "I'm from outer function";

    function innterFunction(){
        console.log(outerVariable);
    }

    return innterFunction
}
const closureExample = outerFunction();
closureExample();
//---------------PROBLEMAS DE MEMORIA-----------------------
function createCounter(){
    let count = 0;

    return function(){
        count++
        console.log(count);
    }
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();
//------------------FLEXIBILIDAD------------------
function outer(){
    let message = "Hello, ";

    function inner(name){
        console.log(message + name);
    }
    return inner
}

const closureA = outer();
const closureB = outer();

closureA('Alice');
closureA('Bob');