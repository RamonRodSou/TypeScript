"use strict";
// Com Method Decorator podemos alterar a execucao dos métodos
// neste exemplo vamos verificar se um usuario pode ou nao fazer uma alteracao no sistema
// a alateracao seria o método a ser executado
// 1 post por cada usuario
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function checkIfUserPosted() {
    return function (target, key, descriptoir) {
        const childFunction = descriptoir.value;
        console.log(childFunction);
        descriptoir.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuario já postou!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
                // caso nao, aplica a function, quando this e o argumento dela
            }
        };
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
// náo deixa inserir mais postagem com esse decorator
newPost.post('Meu segundo post!', newPost.alreadyPosted);
