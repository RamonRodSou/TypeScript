"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function msg(tipo) {
    console.log(tipo);
}
// -------------------------------------------------------------------------------------
// 1 - Importando Arquivo
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
// -------------------------------------------------------------------------------------
// 2 - Importando Variaveis
// Vamos utilizar apenas o export
// No Arquivo de importacao vamos importar os valores com { Destructuring " {}"}
const variable_1 = require("./variable");
msg(variable_1.name);
// -------------------------------------------------------------------------------------
// 3 - Multiplas importacoes
const multiple_1 = require("./multiple");
msg(multiple_1.a);
msg(multiple_1.b);
(0, multiple_1.myFunction)();
// -------------------------------------------------------------------------------------
// 4 - Alias
// mudando o nome da impotacao 
const changeName_1 = require("./changeName");
msg(changeName_1.someName);
// -------------------------------------------------------------------------------------
// 5 - Importando tudo de um Arquivo
// usando apenas o simbolo  " * " 
// Os dados viram um Objeto
// Quando importar tudo, tem que dar um nome
const myNumbers = __importStar(require("./numbers"));
msg(myNumbers);
const nX = myNumbers.n2;
msg(nX);
myNumbers.showNumber();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const adm = new User('Ramon', 30);
msg(adm);
