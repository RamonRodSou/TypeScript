// Fazendo uma condicional no React 'javascript' usa as  { }

// 4 -  importancao de componentes
import FirstComponent from "./components/FirstComponent";

// 5 -  desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring , {Category} from "./components/Destructuring";

//6 - Importe State
import State from "./components/State";
import React ,{ createContext } from "react";

// 9 - types
type textOrnNull = string | null
type fixed = 'Isso' | 'ou' | 'Aquilo'

// 10 Context Api
import Context from "./components/Context";

interface IAPPContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAPPContext | null>(null)

function App() {


  // 1 - Variaveis
  const name: string = 'Ramon';
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Functions
  const userGreeting =(name: string): string =>{
    return `Hello, ${name}!`;
  }

  // 9 - type

  const myText: textOrnNull = 'Tem algo '
  let mySecontText : textOrnNull = ''

  //const testeFixed: fixed = 'nao vai rolar'
  const testeFixed: fixed = 'Aquilo'

  // 9 - Context Api
  // A context API, é uma forma de transmitir dados entre componentes no react
  // A ideia principal é que podemos determinar quais componentes recebem estes dados
  // Ou seja, fazem parte do contexto
  
  const contextValue: IAPPContext = {
    language: 'JavaScript',
    framework:'Express',
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1> TypeScript Com React</h1>
        <h2> Olá, meu nome é {name}! </h2>
        <p>Minha idade é {age}</p>
        {isWorking && <p>Está Trabalhando!</p>}
        {isWorking && (
          <div>
            <p>Esta com mais de um elemento!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name='Segundo'/>
        <Destructuring
          title='Primeiro Conteúdo Destructor'
          content='Algum conteúdo'
          commentsQty={10}
          tags={['ts ','js ','react']}
          category={Category.TS}
        />
        <Destructuring
          title='Segundo Conteúdo Destructor'
          content='Algum conteúdo'
          commentsQty={5}
          tags={['html ','css ','jquery']}
          category={Category.JS}

        />
        <State/>
        {myText && <p>Tem Texto na variável</p>}
        {mySecontText && <p>Tem Texto na variável</p>}
      </div>
      <Context/>
    </AppContext.Provider>

  );
}

export default App;
  