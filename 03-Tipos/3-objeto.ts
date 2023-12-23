// Tipo de Objetos

function passCoordenadas ( coord: { x: number, y: number,    }){

    console.log('X coordenadas ' + coord.x)
    console.log('Y coordenadas ' + coord.y)

}

const objtCoord = {x:1230, y:123.21}
console.log(objtCoord)

const pessoaObj: { nome:string, surname: string} = {nome: 'Ramon', surname: 'Rodrigues'}

console.log(pessoaObj)

console.log(pessoaObj.nome, pessoaObj.surname)


