// Com o property Decorator conseguimos verificar uma propriedade de um objeto
// vamos criar uma validacao de numero maximo de caracteres com decorators


function Max (limit: number) {

    return function (target: Object, propertyKey: string){

        let value: string

        const getter = function () {
            return value
        }

        const setter = function( newVal: string){

            if(newVal.length > limit){
                
                console.log(`O Valor deve ter no máximo ${limit} dígitos.`)
                return

            }else{
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey,{
            get:getter,
            set:setter,
        })
    }

}

class Admin {
    @Max(10)
    userName

    constructor(userName: string){
        this.userName = userName
    }
}

let admin1 = new Admin('Ramon Rodrigues de Souza')
let admin2 = new Admin('Ramon')


console.log(admin2)

