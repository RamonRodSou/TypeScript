   // Tupas Defini os tipos de cada opjeto e a quantidade, e só aceita se for do tipo pedido
   // nao permite mudificacao de tipos


   type fiveNumber = [number, number, number, number, number]

   const myNumberFive: fiveNumber = [10, 20, 30, 40, 50]

   console.log(myNumberFive)


   type userName = [string, number]

   const myName: userName = ['Ramon', 12]
   console.log(myName)

   myName[0] = 'Antonio'
   console.log(myName)
