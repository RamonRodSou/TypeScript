"use strict";
// Semelhante ao decorator de método
// porém este serve apenas para os getters e setters
// podemos alterar a execucao antes de um set ou get
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function enumerable2(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Moster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do mostro: ${this.age}`;
    }
}
__decorate([
    enumerable2(true)
], Moster.prototype, "showName", null);
__decorate([
    enumerable2(false)
], Moster.prototype, "showAge", null);
const myMoster = new Moster('Vampiro', 150);
console.log(myMoster);
