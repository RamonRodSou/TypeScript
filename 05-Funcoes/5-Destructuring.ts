function showProductDetails ({name, price}: {name: string, price: number}): string {

    return `Ò nome do produto é ${name} ele custa ${price}`
}

const shirt = {name: 'Camisa', price: 99.9}

console.log( showProductDetails( shirt ))