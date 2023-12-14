// O property decorator é utilizado nas propriedades de uma classe
// Ou seja, na hora de definicao da mesma podemos ativar uma funcao
// isso nos ajuda a modificar ou validar algum valor


// id que tenha no minimo 5 casas  = 00001\


function formartNumber (){

    return function (target: object, propertyKey: string) {
        
        let value: string

        const getter = () =>{
            return value
        }

        const setter = (newVal:string) =>{
            value = newVal.padStart(5, '0')
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
        }    
}

class ID {

    @formartNumber()
    id

    constructor (id:string){
        this.id = id
    }
}

const myId = new ID('1')

console.log(myId)