"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.m = void 0;
function m(msg) {
    console.log(msg);
}
exports.m = m;
// Decorator de Classe
// Esta ligado ao constructor
// Ou seja, sempre que este for executado, teremos a execucao do decorator
// Isso nos permite acrescentar algo a criacao de classe
function classDec(constructor) {
    m(constructor.name);
    if (constructor.name === "User") {
        m('Criando Usuário!');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const cliente = new User('Ramon');
m(cliente);
