
export function m <T> (msg:T): void{
    console.log(msg)
}

// Decorator de Classe
// Esta ligado ao constructor
// Ou seja, sempre que este for executado, teremos a execucao do decorator
// Isso nos permite acrescentar algo a criacao de classe


function classDec (constructor: Function){

    m(constructor.name);

    if(constructor.name === "User") {

        m('Criando Usuário!');
    
    }
}

@classDec
class User {
    name;

    constructor(name: string){

        this.name = name;
    }
}

const cliente = new User('Ramon')

m(cliente)

