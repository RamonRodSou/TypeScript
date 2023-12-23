"use strict";
// Class Expressions é um recurso para criar uma classe anonima
// podemos tambem utilizar generics junto deste recurso
// vamos encapsular a classe em uma variavel
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Antonio');
console.log(pessoa);
