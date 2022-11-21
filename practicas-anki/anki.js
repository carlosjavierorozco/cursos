let symbol1 = Symbol("hola")
let symbol2 = Symbol("hola")

console.log(symbol1 == symbol2)

const NOMBRE = Symbol("carlos Javier")
const SALUDAR = Symbol()

const persona = {
  [NOMBRE] : "Carlos"
}


console.log(persona[NOMBRE])

persona[SALUDAR] = function (){
  console.log("Hola")
}

//pasar a anki
console.log(Object.getOwnPropertySymbols(persona))