"use strict";
// O property decorator é utilizado nas propriedades de uma classe
// Ou seja, na hora de definicao da mesma podemos ativar uma funcao
// isso nos ajuda a modificar ou validar algum valor
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// id que tenha no minimo 5 casas  = 00001\
function formartNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = () => {
            return value;
        };
        const setter = (newVal) => {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formartNumber()
], ID.prototype, "id", void 0);
const myId = new ID('1');
console.log(myId);
