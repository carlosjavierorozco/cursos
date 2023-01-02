const chino = document.querySelectorAll(".chinese")
const fonetica = document.querySelectorAll(".pinyin")
const english = document.querySelectorAll(".english")

console.log(chino)

let tabla = document.createElement("table")
tabla.classList.add("tabla1")

const tbl_chino = document.createElement("table")

let fila1 = [chino[0].textContent,fonetica[0].textContent,english[0].textContent]
let fila2 = [chino[1].textContent,fonetica[1].textContent,english[1].textContent]
let fila3 = [chino[2].textContent,fonetica[2].textContent,english[2].textContent]
let fila4 = [chino[3].textContent,fonetica[3].textContent,english[3].textContent]
let fila5 = [chino[4].textContent,fonetica[4].textContent,english[4].textContent]


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

fila5.forEach((el)=>{  
  let td = document.createElement("td")
  td.textContent = el
  tr5.append(td)
  tabla.append(tr5)
})

let title = document.querySelector("body > h1:nth-child(1)")

document.body.appendChild(tabla)
//title.append(tabla)
