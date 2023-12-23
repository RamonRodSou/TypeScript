"use strict";
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// A clase espera 2 parametros, se eu colocar apenas 1 ela vai dar erro.
const user1 = new NewUser('Ramon', 30);
const user2 = new NewUser('Samara', 31);
console.log(user1, user2);
