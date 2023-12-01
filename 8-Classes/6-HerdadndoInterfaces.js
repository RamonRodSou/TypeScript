"use strict";
// Podemos herdar de interfaces também com a instrucao    "implements"
// A ideia é bem parecida cde extends
// Porem esta forma é mais utilizada para criar os m;etodos que várias classes terao em comun
// Vamos ver na pratica
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTittle() {
        return `O titulo do post é ${this.title}`;
    }
}
const postagem1 = new blogPost('Typescript');
console.log(postagem1.itemTittle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTittle() {
        return `O titulo é ${this.title}`;
    }
}
const postagem2 = new TestingInterface('JavaScript Com TypeScript');
console.log(postagem2.itemTittle());
