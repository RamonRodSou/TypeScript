class Car {

    name
    readonly wheels = 4

    constructor (name : string) {
        this.name = name
    }
}

const car1 =  new Car ( 'Sandeiro')
const car2 = new Car ('Argo')


console.log (car1)
console.log (car2)

console.log (car2.wheels)


