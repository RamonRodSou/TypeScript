

// Usando o Narrowing para testar Classes

class User {
    name

    constructor(name: string){
        this.name = name;
    }
}

class SuperUser extends User {

    constructor(name: string){
        super(name)
    }
}

const jhon = new User ('Jhon')

const paul = new SuperUser ('Paul')

console.log(jhon)
console.log(paul)

function userGreeting (user: object) {

    if ( user instanceof SuperUser){
        console.log(`Hello ${user.name}, you are a super user`)
    }else if (user instanceof User){
        console.log(`Hi ${user.name}, welcome to our platform!`)
    }
}

userGreeting(jhon)
userGreeting(paul)

class Dog {

    nome
    raca 
    constructor(nome:string, raca?:string){  // Interrogacao quer dizer que nao é obrigatorio, e sempre que tiver tem que colocar uma condicao 
        this.nome = nome
        if(raca){
            this.raca = raca
        }
    }
}

const amora = new Dog ('Amora')
const look = new Dog ('Look', 'Doberman')

function mostrarDog (dog : Dog) {

    if ('raca' in dog) {  // se tiver Raça no cachorro passsado
        console.log (`${dog.nome} é da raça ${dog.raca}`)
    }else {
        console.log (`${dog.nome} é um cão sem raça`)
    }
}

mostrarDog(amora)
mostrarDog(look)