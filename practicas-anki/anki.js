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


const c = document.getElementById("canvas");
const w = c.width
const h = c.height
const ctx = c.getContext("2d")

ctx.arc(w/2,h/2,50,0, 2 * Math.PI)
ctx.stroke()

//proxys sigo olvidandolo...

// const persona = {
//   nombre: "",
//   edad: 0
// }

// const manejador = {
//   set(ob,prop,value){
//     if (Object.keys(ob).indexOf(prop) === -1 ) {
//       return console.error("no existe tal propiedad")
//     }

//     ob[prop] = value
//   }
// }

// const carlos = new Proxy(persona, manejador)

// carlos.nombre = "carlos"
// carlos.correo = "correro"

// console.log(carlos)

//Crear una lista añadiendoles los elementos "li" con textConten, innerHTML y fragment. 

const seasons = ["summer","autumn","winter","springs"];
const $ul = document.createElement("ul");
const $fragment = document.createDocumentFragment()

 document.write("<h2>seasons of the year: </h2>");


// seasons.forEach((el) => {
//   let $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li)
// })



// $ul.innerHTML = "<li>hola</li>";

// seasons.forEach((el) =>{
//   $ul.innerHTML += `<li>${el}</li>`;
// })


seasons.forEach((el)=>{
  let $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li)
})

$ul.appendChild($fragment)
document.body.appendChild($ul);

// proxy

let persona = {
  nombre: "",
  edad: 0
} 

let handler = {
  set(o,p,v){

    if (Object.keys(o).indexOf(p) === -1) {
      return console.error("no existe esa propiedad...")
    }
    o[p] = v
  }


}


let carlos = new Proxy(persona, handler);

carlos.nombre = "calors";
carlos.correo = true;
console.log(carlos)


//bind

const mary = {
  nombre: "Mariyen",
  edad: 31,
 saludar: function (){
    console.log("Hola " + this.nombre)
  }
}

const mariyen = {
  saludar : mary.saludar.bind(mary)
}


//remover eventos

const click = document.getElementById("click")
const rclick = document.getElementById("rclick")


click.addEventListener("click",()=>{
  alert("hiciste click");
})

const remover = (e)=>{  
      alert("removiendo")   
      rclick.removeEventListener("click",remover)  

}

rclick.addEventListener("click",remover)

//iteradores 


let iterador = seasons[Symbol.iterator]()

// template

const $gallery = document.getElementById("gallery");
const $template = document.getElementById("template").content
const $fragmentTemp = document.createDocumentFragment()

galleryContent.forEach((el)=>{
  $template.querySelector("img").setAttribute("src",`${el.img}`)
  $template.querySelector("img").setAttribute("alt",`${el.title}`)

  let clone = document.importNode($template,true)

  $fragmentTemp.appendChild(clone)
})

$gallery.appendChild($fragmentTemp)

//sets y maps

const hermanas = new Map([["mayor","Mariyen"],["mediana","Pelua"],["pequeña","Maye"]])

console.log(hermanas)


const hermanasNombres = [...hermanas.values()]


let set = new Set();

set.add('Jonathan');
set.add('Irma');
set.add('Irma');

for ( let [k,v] of set.entries() ){
  console.log(`key: ${k}
    value: ${v}`);
}


//propiedades dinamicas

const person = {

}

hermanasNombres.forEach((e,i)=>{
  person[`hermana_${i + 1}`] = e;
})

console.log(person)


//lista con las hermanas.

const lista = document.createElement("ul")
const fragmento = document.createDocumentFragment()

// hermanasNombres.forEach((e)=>{
//   let li = document.createElement("li")
//   li.textContent = e
//   lista.append(li)
// })

// hermanasNombres.forEach((e)=>{
//   lista.innerHTML += `<li>${e}</li>`
// })

hermanasNombres.forEach((e)=>{
  let li = document.createElement("li")
  li.textContent = e
  fragmento.append(li)
})

lista.append(fragmento)
document.body.before(lista)

