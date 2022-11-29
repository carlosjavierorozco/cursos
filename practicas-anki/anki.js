// <template> 
const $gallery = document.getElementById("gallery")
const $template = document.getElementById("template").content;
const $fragment = document.createDocumentFragment();
let galleryContent = [
    {
      title: "lolita",
      img: "img/loli.jpg"
    },
    {
      title: "chibitas monogatari",
      img: "img/chibi.jpg"
    },
    {
      title: "rosario girls",
      img: "img/rosario.jpg"
    },
    {
      title: "luffy",
      img: "img/luffy.jpg"
    }];


galleryContent.forEach((el)=>{
  $template.querySelector("#img").setAttribute("src", el.img);
  $template.querySelector("#img").setAttribute("alt",el.title);
  $template.querySelector("#fig-title").textContent = el.title;
  const $clone = document.importNode($template,true);
  $fragment.appendChild($clone); 
});

$gallery.appendChild($fragment);

//parametro REST

function sum(a,b,...c){
  let result =  a + b;

  c.forEach((n)=>{result+=n})

  return result // me salio... muy contento xD
}

// heredar de una clase...

// class Animal{
//   constructor(nombre,raza){
//     this.nombre = nombre;
//     this.raza = raza;
//   }

//   saludar(){
//     return "hola, soy " + this.nombre
//   }
// }

// let animal = new Animal("chopper","reno");

// class Perro extends Animal{
//   constructor(nombre,raza,tamaño){
//     super(nombre,raza)
//     this.tamaño = tamaño;
//   }
// }

//herencia prototipica

function Animal(nombre,raza){
  this.nombre = nombre;
  this.raza = raza
}

function Perro(nombre,raza,tamaño){
  this.super = Animal;
  this.super(nombre,raza)
  this.tamaño = tamaño;
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

let rocko = new Perro("Rocko","shar-pei","mediano");

//console test

let a, b;
let result = "se espera que a sea mayor que b";

a = 5;
b = 32;

console.assert(a > b, {a,b,result})









