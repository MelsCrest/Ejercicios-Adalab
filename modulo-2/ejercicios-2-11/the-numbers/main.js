'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
let concatArray = [];

function bestLostNumber(){
    const evenNumbers = [];
    const multipleOfThree = [];
    for(let i = 0; i < lostNumbers.length; i++){
        if(lostNumbers[i]%2 === 0){
            evenNumbers.push(lostNumbers[i]);
        }
    }
    for(let i = 0; i < lostNumbers.length; i++){
        if(lostNumbers[i]%3 === 0){
            multipleOfThree.push(lostNumbers[i]);
        }
    }
    concatArray = concatArray.concat(evenNumbers, multipleOfThree);

    console.log(evenNumbers);
    console.log(multipleOfThree);
    console.log(concatArray);
};

bestLostNumber();

