let galleryContent = [
   {
      title: "luffy",
      img: "img/luffy.jpg"
    },
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
    }
    ];

// que solucion mas cutre :/ 

let chino = ["nihao","zaijian"];
let english = ["hello","goodbye"];


let fila1 = [chino[0],english[0]]
let fila2 = [chino[1],english[1]]
let fila3 = [chino[3],english[3]]
let fila4 = [chino[4],english[4]]
let fila5 = [chino[5],english[5]]


console.log(fila1)
console.log(fila2)
console.log(fila3)
console.log(fila4)
console.log(fila5)

const tabla = document.createElement("table")
let tr1 = document.createElement("tr")
let tr2 = document.createElement("tr")
let tr3 = document.createElement("tr")
let tr4 = document.createElement("tr")
let tr5 = document.createElement("tr")
let tr6 = document.createElement("tr")
let tr7 = document.createElement("tr")
let tr8 = document.createElement("tr")

fila1.forEach((el)=>{  
  let td = document.createElement("td")
  td.textContent = el
  tr1.append(td)
  tabla.append(tr1)
})

fila2.forEach((el)=>{  
  let td = document.createElement("td")
  td.textContent = el
  tr2.append(td)
  tabla.append(tr2)
})

fila3.forEach((el)=>{  
  let td = document.createElement("td")
  td.textContent = el
  tr3.append(td)
  tabla.append(tr3)
})

fila4.forEach((el)=>{  
  let td = document.createElement("td")
  td.textContent = el
  tr4.append(td)
  tabla.append(tr4)
})


document.body.appendChild(tabla)