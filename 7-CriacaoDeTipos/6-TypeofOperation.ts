// Criacao de tipos com typeof

const userName: string = 'Ramon'

const userName2: typeof userName = 'Samara'

type x = typeof userName

const userName3: x = 'Antonio'
