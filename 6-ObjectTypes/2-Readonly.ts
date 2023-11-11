
// Readonly  é um valor fixo

interface Car {

    brand: string,
    readonly wheels: number    // Um carro sempre vai ter 4 rodas, logo readonly é um valor fixo
} 

const sandeiro:Car = {

    brand: 'Renault',
    wheels: 4   // Não posso alterar o valor de wheels pois ele foi definido como readonly.
}


console.log(sandeiro)


// sandeiro.wheels = 5     // nao vai mudar pq eh um valor fix