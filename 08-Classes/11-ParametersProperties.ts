// parameters properties é um recurso para definir a privacidade, nome e tipos das propriedades no constructor
// Isso resume um poouco a sintaxe das nossas classes


class ParameterProperties {
    constructor(public name: string, private qty: number, private price: number){
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty (){
        return `Quantidade de ${this.qty}`;
    }

    get showPrice (){
        return `Total ${this.price}:`;
    }
}

const newShirt = new ParameterProperties('Camisa', 5, 19.99)

console.log(newShirt.name)
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
