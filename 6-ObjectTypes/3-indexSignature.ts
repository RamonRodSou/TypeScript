interface CoordObject {

    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15
console.log(coords)