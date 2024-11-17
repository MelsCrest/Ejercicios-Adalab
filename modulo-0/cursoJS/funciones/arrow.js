// function almuerzo(proteina, verdura){
//     return `${proteina} ${verdura}`
// }

// almuerzo('🥩','🥦');
// // arrow function
// const almuerzo = (proteina, verdura) => {
//     return `${proteina} ${verdura}`;
// }

// almuerzo('🥩','🥦');
//-------------------------------
/*const greeting = function(name){
    return `Hi, ${name}`;
}
//Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`;
}
//Arrow function - implicit return
const newGreetingImplicit = name => `Hi, ${name}`;
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, ${name} ${lastname}`;*/

//Lexical binding - enlace léxico
const fixionalCharacter = {
    name: 'Uncle Ben',
    messageWithTradicionalFunction: function(message){
        console.log(`${this.name} says: ${message}`); //name devuelve - Uncle Ben
    },
    messageWithArrowFunction: (message)=>{
        console.log(`${this.name} says: ${message}`); //name devuelve - Undefined
    }
    //Las arrow functions no tienen su propio 'this.'. En su lugar, heredan el valor de 'this.' del contexto donde fueron definidas (valor global).
}
fixionalCharacter.messageWithTradicionalFunction('With great power comes great responsability');
fixionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus');
//En este caso es mejor usar las funciones tradicionales como métodos.