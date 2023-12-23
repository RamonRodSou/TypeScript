interface Product {

    name: string,
    price: number,
    isAvailable: true
}

function showProductDetails (product: Product){

    console.log(`O nome do produto é ${product.name} e o valor é R$: ${product.price}`)
    if(product.isAvailable){
        console.log('Este produto está disponível')
    }
    
}

const shirt: Product = {

    name: 'Camisa',
    price: 150,
    isAvailable: true
}

console.log(showProductDetails(shirt))
console.log(showProductDetails({name: 'Short', price: 50, isAvailable: true}))


// Propriedades Opcional em interface

interface User {

    email: string,
    role?: string,

}

function showUserDetails(user : User){

    console.log(`O usuário tem o e-mail ${user.email}`)

    if(user.role){

        console.log(`A função do usuário é ${user.role}`)

    }
}

const u1 :User = {

    email: 'ramon@admin.com',
    role: 'admin'
}

 const u2 :User = {

    email: 'samara@n.com'
}

console.log(showUserDetails(u1))
console.log(showUserDetails(u2))