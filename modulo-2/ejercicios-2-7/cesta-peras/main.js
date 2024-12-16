'use strict';
const pearBasket = {
    numMax : 8,
    numMin : 2,
    numNow : 3,
    numStart : 1
};

pearBasket.addPear = function (){
    return pearBasket.numNow + 1;
};

pearBasket.removePear = function(){
    return pearBasket.numNow - 1;
};

pearBasket.resetPear = function(){
    return pearBasket.numNow;
};

console.log(pearBasket);
console.log(pearBasket.addPear());
console.log(pearBasket.removePear());
console.log(pearBasket.resetPear());