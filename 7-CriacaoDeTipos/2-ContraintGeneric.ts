// Contraint em Generic
// Limitar um tipo para um obj
// Nesse caso todos os Obj tem que ter o name e esse name tem que ser ums string

function showProductName < T extends {name: string}> (obj: T){

    return ` O nome do produto é: ${obj.name}`
}

const myObjt = {name: 'Teclado', cor: 'preta'}
console.log(myObjt)

const car = {name: 'BMW', cor:'Branco', roda: '4', cambio:'Automatico'}
console.log(car)
