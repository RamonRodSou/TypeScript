"use strict";
// Reddonly impossiblita de add mais elementos no array
let myArray = [
    'Maçã', 'laranja', 'Banana'
];
console.log(myArray);
// myArray [3] = 'uva'  // com redonaly vc nao consegue add mais nada
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return ` Fruta: ${item}`;
});
console.log(myArray);
