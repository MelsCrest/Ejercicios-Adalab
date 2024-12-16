'use strict';
const adalaber1 = {
    name : "Susana",
    age : 34,
    profession : "periodista",
};
adalaber1.run = () => `Estoy corriendo`;
adalaber1.runMarathon = (distance) => `Estoy corriendo un maratón de ${distance} kilómetros`;

console.log(adalaber1.run());
console.log(adalaber1.runMarathon(50));


