"use strict";
// Podemos criar classes com tipos genéricos tambem
// ou seja, as propriedades dos argumentos podem ter os tipos definidos na hora da criacao da instancia
// isso nos permite maior flexibilidade em uma classe
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O First é: ${this.first}`;
    }
}
const newItem = new Item('Ramon', 'Rodrigues');
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
const newItem2 = new Item(30, true);
console.log(newItem2.showFirst);
console.log(typeof newItem2.first);
console.log(typeof newItem2.second);
