
// Prop Opcionais  O primeiro argumento nao pode ser opicional 

function showNumber (a: number, b: number, c?: number) {   // Declarei que o 'C' é opcional usando  '?'

    console.log('A = ' + a )
    console.log('B = ' + b )

    if (c) {
        console.log('C = ' + c )
    }

}

showNumber(2 , 3, 4)
showNumber(23, 4)



// Validando Paramentros Opcionais

function advencedGreeting (firstName: string, lastName?: string){

    if( lastName !== undefined){
        return `Olá ${firstName} ${lastName}, você é o cara`
    }

    return `Olá ${firstName}, você é o cara`

}

console.log(advencedGreeting("Ramon", "Rodrigues"))
console.log(advencedGreeting("Antonio"))