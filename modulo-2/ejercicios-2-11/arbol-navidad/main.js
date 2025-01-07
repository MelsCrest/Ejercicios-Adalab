'use strict';

const tree = [];
let halfTree = [];
let leaf = '▲';
let hollows = '    ';

function christmasTree(){
    for(let i = 0; i < 5; i++){
        let hollow = hollows.substring(0,hollows.length-i);
        tree[i] = hollow + leaf;
        leaf +=  '▲▲';
    }    
    tree.splice(0,0,hollows + '★');
    tree.push(hollows + '|');

    console.log(tree);
};
christmasTree();

