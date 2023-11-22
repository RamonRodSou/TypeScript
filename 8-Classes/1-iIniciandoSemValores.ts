// INICIANDO SEM VALORES
// Tem que colocar essa " ! " significa que pode ter ou nao name ou age, náo eh obrigatório

class User {
    name! : string
    age! : number
}

const user = new User()

console.log(user)

user.name = 'Ramon'
user.age = 30
// user.job = 'programador'  o Typescript nao te permite add uma propriedade que nao ha no mode do obj, no Js permitiria.

console.log(user)
