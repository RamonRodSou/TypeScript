// Interfaces

interface Point {

    x: number
    y: number
    z: number
}

function showCoords ( obj: Point){

    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)
}

const coordObj:Point = {

    x: 10,
    y:18,
    z:12
}

showCoords(coordObj)

// ----- Diferenca entre Interface e Type Alias -----------

interface Person {

    nome: string
}

// consigo incrementar mais metodos dentro da interface
interface Person {

    idade: number
}

const desenvolvedor: Person = { nome: 'Ramon', idade: 30}

console.log(desenvolvedor)

type Pessoa = {
    nome: string
}

// Type nao me permite incrementar mais metodos, ela funciona como se fosse uma constante.

// type Pessoa = {
//     idade: number
// }