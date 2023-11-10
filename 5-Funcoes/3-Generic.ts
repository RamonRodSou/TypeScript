// Uma estratégia para quando o tipo de retorno é relacionado ao tipo de argumento;
// por exemplo: um item de um array, pode ser string, boolean, ou number;
// Normalmente são utilizadas letras como T ou U para definir os generics, é uma convenção

// Generic Function

// Essa função quer dizer que ela quer um retorno de um array generico, poder ser
//String, Number ou Booleam
// Usamos o T ou U  como generico e limitamos que queremos um T array e q return um T
// pq pode ser qualquer coisa

function firstElement<T>(array: T[]): T {

    return array[0]
}

console.log(firstElement([23,1,3,4]))

console.log(firstElement(['Ramon', 'Samara', 'ELoísa', 'Antônio']))


function mergeObjects <U, T>( obj1: U, obj2: T){
    
    return {
        ...obj1,        // Pegar tudo que tem dentro desse OBJ
        ...obj2
    }
}

const newObject = mergeObjects ({name: 'Ramon'}, {age:30, job: 'Programmer'})

console.log(newObject)


// Constrants, Limitando os tipos de Dados de uma Generic Function

function biggestNumber <T  extends number | string >( a: T, b: T): T {
    let biggest : T

    if (+a > +b){
        biggest = a
    }
    else (
        biggest = b
    )

    return biggest
}

console.log(biggestNumber( 10, 20))
console.log(biggestNumber( '20', '50'))
// console.log(biggestNumber( '20', 50))  // nao pode pq o  T tem que ser o mesmo tipo, se usasse T e U poderia ser cada obj de um tipo


// Definindo tipo de Parâmetros

function mergeArrays<T>( arr1:T[], arr2:T[]){

    return arr1.concat(arr2)
}

console.log(mergeArrays( [1,2,3], [6,5,4] ))
console.log(mergeArrays<number | string >( [1,2,3], ['Ramon','Samara']))

// Parâmetros Opcionais

function modernGreeting (name: string, greet?: string) {

    if (greet){
        console.log(`Olá ${greet} ${name}, tudo bem?`)
    }else{
        console.log(`Olá ${name}, tudo bem?`)
    }

}

console.log(modernGreeting('Ramon', 'Desenvolvedor'))
console.log(modernGreeting('Ramon'))

// Parâmetro default

// deixa um valor pre definido caso o usuario nao passe

function somaDefault (n: number, m = 10): number {

    return n + m
}

console.log(somaDefault(12))
console.log(somaDefault(20,21))

// Unknown

function doSomething(x: unknown){

    if(Array.isArray(x)){
        console.log(x[0])
    }
    else if ( typeof x === 'number'){

        console.log('X é um numero')
    }
    else if ( typeof x === 'string'){

        console.log('X é uma string')
    }
}

console.log(doSomething([30,1,3]))
console.log(doSomething(2))
console.log(doSomething('Ramon'))


// Never , parecido com Void, é uma funcao que nao retorna nada


function showErrorMessage ( msg : string): never {
    
    throw new Error(msg);

}       

showErrorMessage('Houve algum erro')