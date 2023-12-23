"use strict";
// Funcao Super, envia as propriedades do elemtno PAI para o FILHO, entáo tem que colocar o Super no Filho
// a Classe Filho tem que ter o super com todos os elementos da classe pai
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
console.log(trator);
class NavioDeGuerra extends Machine {
    constructor(name, gun) {
        super(name); // chamada de função super
        this.gun = gun;
    }
}
const galeao = new NavioDeGuerra('Galeão', 10);
console.log(galeao);
