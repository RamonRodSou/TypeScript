// Propriedades sao como variaves, Metodos sao como Funcoes 

class Dwaf {

    name

    constructor (name: string){

        this.name = name
    }

    greeting () {
        console.log('Olá estranho, Hi stranger')
    }
}


const nameDwaf = new Dwaf ('Jimmy')

console.log(nameDwaf.name)

nameDwaf.greeting()

console.log(nameDwaf)




