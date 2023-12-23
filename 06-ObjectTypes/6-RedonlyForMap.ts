// Reddonly impossiblita de add mais elementos no array

let myArray: ReadonlyArray<string> = [

    'Maçã', 'laranja', 'Banana'
]

console.log(myArray)

// myArray [3] = 'uva'  // com redonaly vc nao consegue add mais nada


myArray.forEach ((item) => {  // forEach, apenas vai chamar os itens
    console.log('Fruta: ' + item)
})



myArray = myArray.map ((item) => {  // mapa,  vai chamar e alterar os itens
    return ` Fruta: ${item}`

})

console.log(myArray)
