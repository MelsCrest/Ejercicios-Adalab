'use strict';

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const usersNames = users.map((user)=>user.name);
const usersPin = users.map((user)=>user.pin);
const nameOrder = usersNames.sort();
const pinOrder = usersPin.sort((a,b)=> a - b);

console.log(nameOrder);
console.log(pinOrder);
