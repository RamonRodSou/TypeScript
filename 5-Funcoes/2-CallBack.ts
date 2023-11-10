// CallBack com argumento

function greeting ( name: string) {

    return `Olá ${name}`
}

function preGreeting ( f: ( name: string ) => string, userName:string) { // Função recebe uma string e retorna uma string

    console.log('Preparando a função')

    const great = (userName)

    console.log(great)
}

preGreeting(greeting, 'Ramon')