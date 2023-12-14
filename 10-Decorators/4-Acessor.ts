// Semelhante ao decorator de método
// porém este serve apenas para os getters e setters
// podemos alterar a execucao antes de um set ou get



function enumerable2 (value: boolean){
    
    return function(
        target:any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        descriptor.enumerable = value
    }

}

class Moster { 

    name?
    age?

    constructor (name: string, age: number){

        this.name = name
        this.age = age
    }

    @enumerable2(true)
    get showName (){
        return `Nome do monstro: ${this.name}`
    }

    @enumerable2(false)
    get showAge () {
        return `Idade do mostro: ${this.age}`
    }
}


const myMoster = new Moster('Vampiro', 150)


console.log(myMoster)