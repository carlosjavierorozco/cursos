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

const plantilla = document.getElementById("template").content
const fragmento = document.createDocumentFragment()
const galeria = document.getElementById("gallery")


galleryContent.forEach((el)=>{
  plantilla.querySelector("img").setAttribute("src",el.img)
  let clone = document.importNode(plantilla,true)

  fragmento.append(clone)
})

galeria.append(fragmento)


//ejemplo de proxies 

const persona = {
  nombre: "",
  edad: 0
}

const manejador = {
  set(obj,prop,value){
    if (obj.hasOwnProperty(prop) === false) {
      return console.error("no existe el elemento")
    }
    obj[prop] = value
  }
}



const carlos = new Proxy(persona,manejador)
carlos.nombre = "carlos";
carlos.correo = true;

console.log(carlos)


//clases

class Animal{
  constructor(nombre,color){
    this.nombre = nombre
    this.color = color
  }

  saludar(){
    return "hola"
  }
}

class Perro extends Animal{
  constructor(nombre,color,tamaño){
    super(nombre,color)
    this.tamaño = tamaño
  }
}


const perro = new Animal("rocko","negro")
const luna = new Perro("luna","negro","mediana")

console.log(perro.saludar())
console.log(luna)