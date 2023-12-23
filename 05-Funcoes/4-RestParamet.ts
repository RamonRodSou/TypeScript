
function sumAll (...n: number[]){

    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(123,321,11,32))

console.log(sumAll(1,2,3,4,5))