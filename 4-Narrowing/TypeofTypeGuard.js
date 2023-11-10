"use strict";
// Narrowing é um recurso de TS para identificar tipos de dados;
// ● Dando assim uma direção diferente a execução do programa, baseada no 
// tipo que foi identificado;
// ● Há situações em que os tipos podem ser imprevisíveis, e queremos 
// executar algo para cada uma das possibilidades;
// ● Isso é fundamental também para evitar erros do compilador, 
// identificando e resolvendo os possíveis erros na hora do desenvolvimento;
// ● O type guard é basicamente uma validação do tipo utilizando o typeof;
// ● Desta maneira podemos comparar o retorno do operador com um 
// possível tipo;
// ● Todos os dados vem como string, exemplo: “string”, “number”, 
// “boolean”
// ● E a partir disso realizamos as bifurcações;
// ● Vamos ver na prática!
// 1 - Type Guard
function soma(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossivel realizar a soma');
    }
}
soma(213, 213);
soma('21', '12');
soma('21', 13);
