// parecido com o Typeof, mas representa apenas uma Chave especifica

type Truck = {km: number, kg: number, description: string}

type km = Truck['km']


const myTruck: Truck = { km: 100, kg: 2500, description: 'Ford' }

function showKm (km: km) {

    console.log(`O veículo tem a km de: ${km}`)
}

showKm (myTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)