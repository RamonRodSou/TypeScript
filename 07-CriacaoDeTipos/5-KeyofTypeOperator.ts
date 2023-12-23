type Character = { name: string, age: number, hasDriveLicense: boolean}

type c =  keyof Character

function showCharName (obj : Character, key: c):string {

    return `${obj[key]}`
}

const myChar: Character = {
    name: 'Ramon',
    age: 30,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))

console.log(showCharName(myChar, 'age'))