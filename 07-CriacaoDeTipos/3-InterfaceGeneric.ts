// GenerectiC iNTERFACE
// CONSIGO CRIAR 7UMA INTERFACE COM ELEMENTOS GENERICOS
// E CONSIGO DEFINIR NOS OBJETOS O TIPO DE CADA UM
// Essa interface se torna mais usavel




interface MyObject < T, U ,Q> {

    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean,boolean,string>


const corola:Car = {name:'Corola', wheels:4, engine:2.0, color:'Black'}

console.log (corola)

const caneta:Pen = {name:'Bic', wheels:false, engine:false, color:'Blue'}

console.log (caneta)