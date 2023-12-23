"use strict";
function soma(a, b) {
    console.log(a + b);
}
soma(3, 4);
// soma ('a' ,'b') Nao vai rolar pq nao eh uma string
// Retorno de Function
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Ramon'));
// Function anonima
setTimeout(function () {
    const valor = 1000;
    //console.log(parseFloat(valor)) o TS avisa que vai dar erro pq nao se pode passar um number para FLoat apenas String
    //console.log (valor)
}, 2000);
