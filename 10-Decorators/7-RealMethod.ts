// Com Method Decorator podemos alterar a execucao dos métodos
// neste exemplo vamos verificar se um usuario pode ou nao fazer uma alteracao no sistema
// a alateracao seria o método a ser executado
// 1 post por cada usuario

function checkIfUserPosted() {

    return function (
         target: Object,
         key: string | Symbol,
         descriptoir: PropertyDescriptor   
    ){
        const childFunction = descriptoir.value;
        console.log(childFunction)
        descriptoir.value = function (...args: any []){
            if(args[1] === true){
                console.log('Usuario já postou!')
                return null
            }else {
                return childFunction.apply(this, args)
                // caso nao, aplica a function, quando this e o argumento dela
            }
        }
    }
}


class Post {
    alreadyPosted = false

   @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){

        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()

newPost.post('Meu primeiro post!', newPost.alreadyPosted)

// náo deixa inserir mais postagem com esse decorator
newPost.post('Meu segundo post!', newPost.alreadyPosted)