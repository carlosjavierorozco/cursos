//Crear una lista añadiendoles los elementos "li" con textConten, innerHTML y fragment. 

const lista = ["uno","dos","tres","cuatro","cinco"]
let $ul = document.createElement("ul")

lista.forEach((el)=>{
  const li = document.createElement("li")
  li.textContent = el
  $ul.appendChild(li)
})

document.body.appendChild($ul)

const meses = ["Enero","Febrero","Marzo","Abril","Mayo"]
let $ulContainer = document.createElement("ul")

meses.forEach((el)=>{
  $ulContainer.innerHTML += `<li>${el}</li>`
})

document.body.appendChild($ulContainer)


//fragmentos, mejor forma

const konoha = ["Naruto","Kakashi","Ino"]
const fragment = document.createDocumentFragment()
const ulLista = document.createElement("ul")

konoha.forEach((el)=>{
  let li = document.createElement("li")
  li.textContent = el
  fragment.appendChild(li)
})

ulLista.appendChild(fragment)

document.body.appendChild(ulLista)