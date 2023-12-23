"use strict";
// CallBack com argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função');
    const great = (userName);
    console.log(great);
}
preGreeting(greeting, 'Ramon');
