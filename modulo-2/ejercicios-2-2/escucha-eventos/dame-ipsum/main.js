'use strict';

const paragraph = document.querySelector('p');
const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque perspiciatis quas, vitae nemo voluptatum? Nisi, hic veritatis. Dignissimos id nisi cum dolore exercitationem. Aut voluptate ut ipsum quae qui?';

paragraph.addEventListener("click", ()=>{
    paragraph.innerHTML += loremIpsum;
})
