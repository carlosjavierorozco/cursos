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


// traversin

let $ul = document.getElementById("ul")
let $li = document.createElement("li")
let text = "ELEMENTO INSERTADO"

/*$ul.prepend($li)
$ul.querySelector("#ul > li:nth-child(3)").style.color = "red"
$ul.querySelector("#ul > li:nth-child(1)").style.setProperty("background-color","blue")
$ul.querySelector("#ul > li:nth-child(1)").insertAdjacentText("afterbegin", text)
*/

//meter en anki

//prepend
//append
//before
//after


//proxies

const person = {
  nombre: "",
  edad: 0
}

const handler = {
  set(obj,prop,value){

    if(Object.keys(obj).indexOf(prop) === -1){
      return console.error("No existe esa propiedad")
    }


    if (prop === "edad" && !(/^(\d{2})$/g.test(value))) {
      return console.error("no es una edad valida")
    }

      
    obj[prop] = value

  
    
  }

}



const carlos = new Proxy(person,handler)
carlos.nombre = "Carlos Javier Orozco"
carlos.twitter = "@carlosmjorozco"
carlos.edad = 122
console.log(carlos.nombre)


//recorrer un arreglo con el iterador


const num = [1,2,3,4,5,6,7,8,9]

let iterator = num[Symbol.iterator]()

let next = iterator.next()

while(!next.done){
  console.log(next.value)
  next = iterator.next()
}

//con textContent


const menu = ["inicio","galeria","blog","contacto","salir"]


/*menu.forEach((el) => {
  const li = document.createElement("li")
  li.textContent = el
  $ul.insertAdjacentElement("beforeend",li)
})
*/


//con innerHTML

// menu.forEach((el) =>{

//   $ul.innerHTML += `<li>${el}</li>`

// })


//con fragment

$fragment = document.createDocumentFragment()


menu.forEach((el)=>{
  let li = document.createElement("li")
  li.textContent = el
  $fragment.appendChild(li)
})


$ul.appendChild($fragment)




//bind


const mary = {
    nombre: "Mary",
    saludar: function(){
      console.log("hola soy " + this.nombre)
    }
}


const mariyen = {
  saludar: mary.saludar.bind(mary)
}


//delagacion de eventos


window.addEventListener("click",(e)=>{
  if (e.target.matches("li")) {
    console.log("clicaste en el un li")
    e.stopPropagation()
  }
})

// template 

let $temp = document.getElementById("template").content
let $frag = document.createDocumentFragment()
let content = [
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
    }]


content.forEach((el)=>{
  $temp.querySelector("img").setAttribute("src",el.img)
  $temp.querySelector("img").setAttribute("alt",el.title)

  let $clone = document.importNode($temp,true)

  $frag.appendChild($clone)
})

document.body.prepend($frag)

