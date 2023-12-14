"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function m(msg) {
    console.log(msg);
}
// 1 - Exemplo Decorator
// esta ligado a funcao da classe
function myDecorator() {
    m('Iniciando decorator!');
    return function (target, propertKey, descriptor) {
        m('Executando decorator');
        m(target);
        m(propertKey);
        m(descriptor);
    };
}
class MyClass {
    testing() {
        m('Terminando execucao do método');
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const anyThing = new MyClass();
m(anyThing);
// ---------------------------------------------------------------------------------------------
// 2 - Multiplos Decorators    
// Executa os mais a baixo primeiro
function a() {
    return function (target, propertKey, descriptor) {
        m('Executando A');
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        m('Executando B');
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        m('Executando C');
    };
}
class MultipleDecorators {
    testing() {
        m('Terminando execucao da');
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
// ---------------------------------------------------------------------------------------------
