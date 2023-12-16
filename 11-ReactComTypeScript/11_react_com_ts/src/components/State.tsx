// useState é um hook muito utilizado em React
// Serve para Consultar e alterar o estado de algum dado
// Atrelamos uma funcao set a um evento, como mudanca de dados em input e alteramos o valor da variavel base
// podemos adaptar este recurso para Ts Tambem


import React, {ChangeEvent, useState} from 'react'

const State = () => {

const [text, setText] = useState<string | null >(null) // vai vir um texto ou nulo

// handlechange funcao padrao para receber useState 
// changeEvent <HTMLInputElement> um tipo que diz que virá uma mudanca no html

const handlechange = (e:ChangeEvent<HTMLInputElement>)=> {
    setText(e.target.value)
}

  return (
    <div>
        <p> o texto é: {text}</p>
        <input type="text" onChange={handlechange}/>
    </div>
  )
}

export default State