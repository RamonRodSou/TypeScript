type testA = 'texte'

type CunstomType = `some ${testA}`

const testing: CunstomType = 'some texte'
// const testing2: CunstomType = 'some texte 2'    / Nao aceeita, apenas o valor certinho



type a1 = 'Testando'
type a2 = 'Union'

type a3 = `{a1}` |  `{a2}`