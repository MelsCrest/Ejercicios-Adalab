'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];

const evenNumber = pins.filter((num) => num % 2 === 0);

console.log(evenNumber);