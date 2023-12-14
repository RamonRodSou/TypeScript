// Com class decorator podemos influenciar oconstructor
// neste exemplo vamos criar uma funcao para inserir data de criacao dos objetos


function createdDate (created: Function) {

    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date
    
    constructor(id: number){
        this.id = id;
    }
}

@createdDate
class Pen {
    id

    constructor(id: number){
        this.id = id;
    }
}

const myPen = new Pen(12)
const myBook = new Book(10)

console.log(myPen)
console.log(myBook)