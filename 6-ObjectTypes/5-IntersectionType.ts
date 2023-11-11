interface Character {
    name: string;
}

interface Gun {

    type: string
    calibre: number;

}

type HumanCalibre = Character & Gun



const atirador = {

    name: "Ramon",
    type: 'rifle',
    calibre: 5.6,
}


console.log(atirador)