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

const persona = {

}

const nombre = ["carlos","jesus","julio"]

nombre.forEach((el,id) => {
  persona[`id_${id+1}`] = el
})

console.log(persona)

//eventos - remover eventos

const boton = document.querySelector("button")

const remover = ()=>{
  console.log("removiendo")
  boton.removeEventListener("click", remover)
}


boton.addEventListener("click",remover)


// ejemplo de uso de la plantilla. 


const template = document.querySelector("#template").content;
const fragmento = document.createDocumentFragment();
const gallery = document.querySelector("#gallery");


galleryContent.forEach((el)=>{
  template.querySelector("img").setAttribute("src",el.img)
  template.querySelector("img").setAttribute("alt",el.title)

  clone = document.importNode(template,true)

  fragmento.append(clone)
})

gallery.append(fragmento)

//get selection


addEventListener("mouseup",()=>{
  let seleccion = document.getSelection().toString()

  console.log(seleccion);
})


// el iterador

 const num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 const iterador = num[Symbol.iterator]()

while (iterador.next().done !== true){
  console.log(iterador.next().value)
//  iterador.next()
}

//let next = iterador.next()

/*while(!next.done){
   console.log(next.value)
   next = iterador.next()
}*/


//herencia prototipica

// function Animal(nombre,tamaño,color){

//   this.nombre = nombre;
//   this.tamaño = tamaño;
//   this.color = color;


//   saludar(){
//     return "hola"
//   }
// }


// function Perro(nombre,tamaño,color,raza){
//   this.super = Animal;
//   this.super(nombre,tamaño,color)
// }

// Perro.prototype = new Animal()
// Perro.prototype.constructor = Perro