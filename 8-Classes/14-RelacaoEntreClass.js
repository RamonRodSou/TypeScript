"use strict";
// Podemos criar um objeto com base em outra classe
// quando as classes sao identicas o TS nao reclama sobre esta acao
// Precisamos que as duas sejam exatamente iguais
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
