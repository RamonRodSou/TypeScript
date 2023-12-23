// 1- Iniciando o projeto
//console.log('Ts com Express')

// 2- Init express
import express, {NextFunction, Request, Response} from 'express'

const app = express()

//3 rotas com POST
app.use(express.json())

// 2- Init express
app.get('/', (req, res) => {
    return res.send('Hello Express!')
})

//3 rotas com POST
app.post('/api/product', (req,res) => {
    const body = req.body;
    console.log(body)

    // o Express requer que sempre seja retornado algo
    return res.send('Produto add!')
})

// 4 - rotas para todos os verbos
app.all("/api/product/check", (req, res) =>{
    //req.method = Verbo HTTP

    if(req.method === "POST"){
        return res.send('Inseriu algum registro!')

    }else if( req.method === "GET"){
        return res.send('Leu algum registro!')

    }else {
        return res.send('Não podemoos realizar esta operação!')

    }
})

//5- interface do express
app.get("/api/interfaces", (req: Request, res:Response) => {

    return res.send('Utilizando as Interfaces')
})

//6- Enviando Json pro Frontend
app.get("/api/json", (req: Request, res:Response) => {

    return res.json({

        name:"Shirt",
        price: 30.00,
        color: "Red",
        sizes:["P","M","G"],
    })
})

//7- Router Parameters

app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)
    
    const id = req.params.id
    
    if(id === "2"){
        const product = {
            id:2,
            name:"Bone",
            price: 12
        }
        return res.json(product)
    }else {
        return res.send('Produto nao encontrado')
    }
})

// 8- Rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params)
    
    const id = req.params.id
    const reviewId= req.params.reviewId
    
        return res.send(`Acessando a review ${reviewId} do produto ${id}`)

})

// 9- router handler
function getUser(req: Request, res: Response){

    console.log(`Resgatando o usuário com id: ${req.params.id}`)
    return res.send("Usuario encontrado")
}

app.get("/api/user/:id", getUser)

//10- Middleware
function checkUserADM(req: Request, res: Response, next: NextFunction) {
    
    if(req.params.id === "1"){
        console.log('Pode seguir!')
        next()
    }else{
        console.log('Acesso restrito')
    }
}


app.get("/api/user/:id/acess", checkUserADM, (req: Request, res: Response) =>{

    return res.json({msg: "Bem-vindo a área administrativa!"})
})

app.listen(3000, () => {
    console.log('Aplicacao de Ts = Express Funcionando!')
})


