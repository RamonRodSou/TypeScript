interface A {}

interface B {}

interface Teste {
    showName (): string
}

type myType = B extends A ? number : string
// mytype estende a B, se B  herda de A vai ser number, se nao vai ser string

const someVar: myType = 5
console.log(someVar)

//const someVar2:myType = 'teste'

type myTypeB = Teste extends {showNumber(): number } ? string : boolean