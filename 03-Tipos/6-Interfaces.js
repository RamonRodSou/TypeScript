"use strict";
// Interfaces
function showCoords(obj) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 18,
    z: 12
};
showCoords(coordObj);
const desenvolvedor = { nome: 'Ramon', idade: 30 };
console.log(desenvolvedor);
// Type nao me permite incrementar mais metodos, ela funciona como se fosse uma constante.
// type Pessoa = {
//     idade: number
// }
