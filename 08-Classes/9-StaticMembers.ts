// Podemos criar propriedades e métodos estáticos em classes;
// Isso faz com que o acesso ou a utilização não dependam de objetosç
// Podemos utilizá-los a partir da própria classe
// vamos ver na prática!

class StaticMembers {

   static prop = 'Teste Static'

   static staticMethod () {
     console.log ('Este é um método estático')
   }
}

console.log (StaticMembers.prop)

StaticMembers.staticMethod()