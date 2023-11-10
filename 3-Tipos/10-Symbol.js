"use strict";
// Symbol para ser declarado assim como o Bigint
// Precisa que o JS seja 2020
let symbolA = Symbol('a');
let symbolB = Symbol('a');
// O Symbol nunca vai ser igual a outro mesmo aparentanto ter omsm valor/striong etc
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
