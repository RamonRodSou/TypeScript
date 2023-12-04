// Visibilidade é o conveito de expor nossos metodos de classe
// public:    visibilidade default, pode ser acessado em qualquer lugar
// protected: acessível apenas a subclasses da classe do método, para acessar
// uma propriedade precisamos de um método
// private: apenas a classe que declarou o método pode utilizar
// veremos exemplos de todos eles a seguir!

// Public

class C {
    
    public x = 10
}

class D extends C{
 
}

const cInstance = new C ()

const dInstance = new D ()


console.log(cInstance)
console.log(dInstance)

//Protected
// Só podem ser acessados por meio de métodos


class E {
    
    protected x = 10

    protected protectedMethod () {

        console.log('Este é um método protegido')
    }
}

class F extends C{
 
    showX () {
        console.log ('esse é o Protected ' + this.x);
    }

    showProtectedMethod () {
        console.log(this.showProtectedMethod)
    }
}

const eInstance = new E ()

const fInstance = new F ()

fInstance.showX()
fInstance.showProtectedMethod()


//Private
// Os métodos e propriedades pricisam de metodos para serem acessados
// e só podem ser acessados nessa classe

class PrivateClass {

    private name = 'Private'
    
    showName () {
        return this.name
    }

    private privateMethod () {
        console.log ('Método privado')
    
    }

    showPrivateMethodo () {
        this.privateMethod()
    }
}

const pObj = new PrivateClass ()

// console.log(pObj.name)
console.log (pObj.showName())

// console.log(pObj.privateMethod())
pObj.showPrivateMethodo()

// class TestinggPrivate extends PrivateClass {

//     myMethod () {
//         this.privateMethod()
//     }
// }