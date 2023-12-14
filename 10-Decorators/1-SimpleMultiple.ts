function m <T> (msg:T){
    console.log(msg)
}

// 1 - Exemplo Decorator
// esta ligado a funcao da classe


function myDecorator () {

    m('Iniciando decorator!')

    return function ( 
        
            target: any,
            propertKey: string,
            descriptor: PropertyDescriptor
        )   {
                m('Executando decorator')
                m(target)
                m(propertKey)
                m(descriptor)
                
            }
}

class MyClass {

    name!: string

    @myDecorator()
    testing(){
        m('Terminando execucao do método')
    }
}

const anyThing = new MyClass()

m(anyThing)

// ---------------------------------------------------------------------------------------------

// 2 - Multiplos Decorators    
// Executa os mais a baixo primeiro

function a () {
    return function ( 
            target: any,
            propertKey: string,
            descriptor: PropertyDescriptor
        )   {
                m('Executando A')

            }
}

function b () {
    return function ( 
            target: any,
            propertKey: string,
            descriptor: PropertyDescriptor
        )   {
                m('Executando B')

            }
}

function c () {
    return function ( 
            target: any,
            propertKey: string,
            descriptor: PropertyDescriptor
        )   {
                m('Executando C')

            }
}

class MultipleDecorators {

    @c()
    @a()
    @b()
    testing(){
        m('Terminando execucao da')
    }
}


// ---------------------------------------------------------------------------------------------
