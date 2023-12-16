// 3 - Usando a extensao TypeScript React Code Snippets "üsado para codar mais rapido"
// Ela nos ajuda com atalhos para programar mais rapido
// Como tsdrpfc (typescript react arrow facntion component), que cria um componente funcional
// isso torna o nosso dia a dia mais simples


// 5- Destructuring nas props
// o Destructuring é um recurso de ES6, que permite separar um array ou objeto em varias variaveis
// Aplicamos esta técnnica nas props, para nao precisar repetir o nome do objeto sempre
// Podemos fazer desta maneira em TS tambem

import React, { ReactElement } from 'react'; 

export default function FirstComponent (): ReactElement {
  return (
    <div>
        <h1> Meu primeiro componente</h1>
    </div>
  );
}
