"use strict";
// Com Union Type vc pode colocar quantos tipos quiser
function showBalance(balance) {
    console.log(`O Saldo da conta é R$: ${balance}`);
}
showBalance(400);
showBalance('909');
const arr = [1, 'nome', true];
// Avancando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário aprovado';
    }
    return `O cargo do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showID(id) {
    console.log(`O ID é: ${id}`);
}
showID(2121);
showID('97867');
