// let galleryContent = [
//     {
//       title: "lolita",
//       img: "img/loli.jpg"
//     },
//     {
//       title: "chibitas monogatari",
//       img: "img/chibi.jpg"
//     },
//     {
//       title: "rosario girls",
//       img: "img/rosario.jpg"
//     },
//     {
//       title: "luffy",
//       img: "img/luffy.jpg"
//     }];

function Animal(nombre){
  this.nombre = nombre
}

function Perro(nombre,raza){
  this.super = Animal;
  this.super(nombre);
  this.raza = raza
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;


let rocko = new Perro("Rocko","Shar Pei")


let a = 465;
let b = 50;
let assert = "se espera que a sea mayor que b"
console.assert(a > b,{a,b,assert})

let carlos = {
  nombre: "carlos",
  edad: 31,
}


//maps

const hermanas = new Map([["mayor","Mariyen"],["mediana","Pelua"],["Pequeña","Maye"]])

const nameSisters = [...hermanas.values()];

console.log(nameSisters)

for([key,value] of hermanas){
  console.log(key,value)
}


//remove child
let div = document.getElementById("div")
let img = document.querySelector("#div>img")
//div.removeChild(img[0])

//clone nodes

let cloneImg = img.cloneNode(img, true)

//Ver una propiedad, estilo computado en particular. 
//me
let objectFit = window.getComputedStyle(img).getPropertyValue("object-fit")

console.log(objectFit)


//date

let hoy = new Date()

console.log(hoy)

console.log(hoy.toDateString())
console.log(hoy.getTimezoneOffset())

//location

//location.replace("https://ankiweb.net/")

//operador ternario
false ? console.log(true) : console.log(false)

//numero aleatorio entre un minimo y un maximo

let max = 1000;
let min = 900;

let random = Math.random() * (max-min) + min

console.log(random.toFixed(0))
