function msg <T>(tipo:T){

    console.log(tipo)
}
// -------------------------------------------------------------------------------------

// 1 - Importando Arquivo

import importGreet from "./greet";
importGreet()

// -------------------------------------------------------------------------------------

// 2 - Importando Variaveis
// Vamos utilizar apenas o export
// No Arquivo de importacao vamos importar os valores com { Destructuring " {}"}
import { name } from "./variable";

msg(name)

// -------------------------------------------------------------------------------------

// 3 - Multiplas importacoes
 import {a,b, myFunction} from "./multiple"

 msg(a)
 msg(b)
 myFunction()

// -------------------------------------------------------------------------------------

// 4 - Alias
// mudando o nome da impotacao 
import { someName as nome } from "./changeName";

msg(nome)

// -------------------------------------------------------------------------------------

// 5 - Importando tudo de um Arquivo
// usando apenas o simbolo  " * " 
// Os dados viram um Objeto
// Quando importar tudo, tem que dar um nome

import * as myNumbers from "./numbers"

msg(myNumbers)

const nX = myNumbers.n2
msg(nX)

myNumbers.showNumber()

// -------------------------------------------------------------------------------------

// 6 - Importando Tipos ou Interfaces

import { Human } from "./myType";

class User implements Human {
    name;
    age;

    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const adm = new User ('Ramon', 30)
msg(adm)