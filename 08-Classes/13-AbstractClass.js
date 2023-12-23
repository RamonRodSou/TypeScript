"use strict";
// Abstract Class é um recurso para servir como molde de outra class
// todos os metodos dela devem ser implementados nas classes que a herdam
// e tambem nao podemos instanciar objetos partir destas classes
// bem parecido com uma instancia
// Instancia a gente implementa e Classe Se Herda
class AbstractClass {
}
// const newObj = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O meu nome é ${this.name}`);
    }
}
const newAbastractObject = new AbstractExample('Eloísa');
newAbastractObject.showName();
