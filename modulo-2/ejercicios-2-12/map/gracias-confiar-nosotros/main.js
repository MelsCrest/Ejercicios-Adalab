'use strict';

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
];

const welcomePremium = users.map((user)=>user.isPremium ? `Bienvenido ${user.name}. Gracias por confiar en nosotros.` : `Bienvenida ${user.name}`);

console.log(welcomePremium);


