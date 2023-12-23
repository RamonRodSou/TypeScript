"use strict";
// As vezes o TypeScript nao reconhece alguma elemento (classe, id , tag) do Html ( DOM )
// Mas a gente sabe que existe esse elemento, e para evitar algum erro do Tipyscript
// usamos o exclamação ( ! )
const demo = document.querySelector('#demo');
console.log(demo.innerHTML); // Interrogação é algo opcional
// Exclamação é algo que exist\
