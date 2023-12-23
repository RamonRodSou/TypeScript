// O override é uma tecnica utilizada para substituir um metodo de uma classe que herdamos algo
// basta criar o metodo com o mesmo nome na classse filha
// isso caracteriza o overide
// vamos ver na pratica!

class Base{

    someMethod () {
        console.log ('alguma coisa')
    }
}

class Nova extends Base {

}

const novaTeste = new Nova
novaTeste.someMethod()


class BaseSon extends Base {
    someMethod () {
        console.log ('Mudei o Metodo apenas para Son')
    }
}

const son = new BaseSon
son.someMethod()