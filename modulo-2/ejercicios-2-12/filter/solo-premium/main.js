'use strict';

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
];

const premiumUsers = users.filter((user)=>user.isPremium);

console.log(premiumUsers);

for(let user of premiumUsers){
    console.log(user.name);
}