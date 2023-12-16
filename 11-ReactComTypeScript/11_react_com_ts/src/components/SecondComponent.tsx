// tsrafce
import React from 'react'

interface Props  {

    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h1>Meu segundo componente {props.name}</h1>
    </div>
  )
}

export default SecondComponent
