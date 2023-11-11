interface Human {

    name: string
    age: number
}

interface SuperHuman extends Human {

    superPower: string[]
}

const ramon: Human = {

    name: "Ramon", 
    age: 25,
}

const goku: SuperHuman = {

    name: 'Goku' ,
    age: 50,
    superPower: ['Kame Hame Ha', 'Genki Dama']
}

console.log(ramon)
console.log(goku)
console.log(goku.superPower[1])
