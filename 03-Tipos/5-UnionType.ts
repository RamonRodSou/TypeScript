
// Com Union Type vc pode colocar quantos tipos quiser


function showBalance ( balance: string | number){

    console.log(`O Saldo da conta é R$: ${balance}`)
}

showBalance(400)
showBalance('909')

const arr: Array< number | string | boolean> = [1, 'nome', true]

// Avancando em union types

function showUserRole (role: boolean | string) {

    if (typeof role === 'boolean'){

        return 'Usuário aprovado'
    }

    return `O cargo do usuario é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))


// Type Alias  - reduzindo

type ID = string | number 

function showID (id: ID) {

    console.log(`O ID é: ${id}`)

}

showID(2121)
showID('97867')