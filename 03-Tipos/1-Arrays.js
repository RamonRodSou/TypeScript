"use strict";
// Arrays
//Array de Numeros
let number = [1, 2, 3, 4];
number.push(5);
console.log(number[2]);
// Array de String
let nome = ['Ramon', 'Samara', 'Antonio'];
console.log(nome[2]);
nome.push('Eloisa');
console.log(nome[3]);
// sintase Antiga
let num = [10, 20, 30];
console.log(num);
//Array de qualquer coisa, nao recomendado usar com TypeScript
const arra1 = [1, 'teste', true, [], { nome: 'Ramon' }];
console.log(arra1);
arra1.push([1, 2, 3]);
console.log(arra1);
