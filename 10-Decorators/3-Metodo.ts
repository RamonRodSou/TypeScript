// Com este decorator podemos modificar a execucao de metodos
// precisamos inserir o decorator antes da declaracao do metodo
// Ele e executado antes do metodo


function enumerable (value: boolean){
    
    return function(
        target:any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        descriptor.enumerable = value
    }

}


class Machine {
    name 

    constructor (name: string){
        this.name = name;
    }

    @enumerable(false)
    showName () {
        console.log(this)
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine ('Trator')
console.log(trator.showName())
