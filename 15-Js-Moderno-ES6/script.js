// // 1 - Var, let e const
// console.log("------ Usando o Var")

// var a = 10
// var b = 20

// if ( b > 10 ){

//     var a = 5
//     console.log(a)
// }
// console.log(a)


// console.log("------ Usando o Let")

// let aLet = 30
// let bLet = 20

// if ( bLet > 10 ){

//     let aLet = 15
//     console.log(aLet)
// }
// console.log(aLet)

// const i = 100

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }
// console.log(i)


// console.log("------ Usando o Const")

// const aConst = 30
// const bConst = 20

// if ( bConst > 10 ){

//     const aConst = 15
//     console.log(aConst)
// }
// console.log(aConst)


// function logName() {
//     const name = 'Ramon'
//     console.log(name)
// }
// logName()

// const name = 'Samara'
// console.log(name)


// // 2 -  Arrow Functions

// console.log("------ Arrow Functions")

// const sum = function(x, y){
//     return x + y
// }

// const arrowSum = (x, y) => x - y

// console.log(sum(4, 8))
// console.log(arrowSum(4, 8))

// const greeting = (name) => {

//     if(name) {
//         return `Hello ${name}`
//     }
//     return "Hello Guest"
// }
// console.log(greeting())
// console.log(greeting('Ramon'))

// const testeArrow = () => console.log('Testou!')

// testeArrow()

// const user = {
    
//     name: 'Ramon',
//     sayUserName() {
//         var self = this
//         setTimeout(function () {
//             console.log(self)
//             console.log(`User Name is ${self.name}`)
//         },500)
//     },

//     sayUserNameArrow () {
//         setTimeout(() => {
//             console.log(this)
//             console.log(`User Name is ${this.name}`)
//         }, 700);
//     }

// }

// user.sayUserName()
// user.sayUserNameArrow()

// // 3 Filter
// console.log("------ Filter")

// const number = [1, 2, 3, 4, 5]

// const hightNumbers = number.filter( (n) => {

//     if(n >= 3) {
//         return n
//     }
// })

// console.log(number)
// console.log(hightNumbers)

// const user = [
//     {name: 'Ramon', available: true},
//     {name: 'Samara', available: false},
//     {name: 'Antonio', available: false},
//     {name: 'Eloisa', available: true},
// ]

// const availableUser = user.filter( (user) =>  user.available)
// const notAvailableUser = user.filter( (user) => !user.available)

// console.log(availableUser)
// console.log(notAvailableUser)


// // 4 Map

// console.log("------ Map")

// const number = [1, 2, 3, 4, 5]

// const hightNumbers = number.map( (n) => {

//     if(n >= 3) {
//         return n
//     }
// })

// console.log(number)
// console.log(hightNumbers)

// const products = [
//     {name: 'Camisa', price: 10.99, category: 'Roupas'},
//     {name: 'Chaleira Elétrica', price: 49.99, category: 'Elettro'},
//     {name: 'Fogáo', price: 400, category: 'Eletro'},
//     {name: 'Bermuda', price: 50.99, category: 'Roupas'}
// ]

//  products.map( (products) => {
//     if( products.category === 'Roupas') {
//         products.onSale = true
//     }
//  })

//  console.log(products)


// // 5 Template Literals

//  console.log("------ Template Literal")

//  const userName = 'Ramoon'
//  const age = 30

//  console.log(`O nome do usuário é ${userName} e a idade é ${age} anos`)


// // 6 Destructuring
// Usar em Array ou Objetos
// Array = varios itens 
// Objeto = nome, propriedades, e valores

//  console.log("------ Destructuring")

// const fruits = ['Banana', 'Uva', 'Maracujá']

// const [f1, f2, f3 ] = fruits
// console.log (`A primeira fruta é ${f1} e a última é ${f3}`)

// const prooductDetails =  {
//     name: 'mouse',
//     price: '39.99',
//     category: 'Periféricos',
//     color: 'Red'
// }

// const { 
//     name: productName,
//     price,
//     category: productCategory,
//     color
// } = prooductDetails

// console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory}, possui a cor ${color}`)


// // 7 spread Operator

// console.log("------ Spread Operator")

// const a1 = [1, 2, 3]
// const a2 = [4, 5, 6]

// const a3 = [...a1, ...a2]
// console.log(a3)

// const a4 = [0, ...a1, 4]
// console.log(a4)

// const carName = { name: 'Sandeiro' }
// const carBrand = { brand: 'Renault' }
// const otherInfors = { km: 121000, price: 25000, color:'Prata'}

// const car = {...carName, ...carBrand, ...otherInfors}
// console.log(car)


// 8 Classes

console.log("------ Classes  ")

class Product {

    constructor (name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount (discount) {
        return this.price * ((100 - discount)/ 100)
    }
}

const shirt = new Product('Camisa', 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))


const tenis = new Product('Tenis Adidas', 220)
console.log(tenis.name)
console.log(tenis.productWithDiscount(20))


// // 9 Heranca

console.log("------ Heranca  ")

class ProductWithAttributes extends Product {

    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As Cores sao: ')
        this.colors.forEach(element => {
            console.log(element)
        });
    }
}

const hat = new ProductWithAttributes ('Chapeu', 29.99, ['Preto', 'Azul', 'Vermelho'])

console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()
