'use strict';

const times = [56, 9, 45, 28, 35];

const sumTimes = times.reduce((acc, number)=> acc + number);

const average = sumTimes / 5;

console.log(average);