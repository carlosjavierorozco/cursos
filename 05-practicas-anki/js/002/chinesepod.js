const hanzi = document.querySelectorAll("tr > td + td")

let chino = []
let fonetica = []
let english = []

let chinese = new RegExp("^.*[\u4E00-\u9FA5]");
let pinyin = new RegExp("^.*[[ǎǒěǐǔǚǍǑĚǏǓǙàòèìùǜÀÒÈÌÙǛüÜáóéíúǘÁÓÉÍÚǗāōēīūǖĀŌĒĪŪǕ]");

hanzi.forEach(el=>{
  if (chinese.test(el.textContent)) {
    chino.push(el.textContent)  
  }
    
  if (pinyin.test(el.textContent)) {
     fonetica.push(el.textContent)
   }

   if (!chinese.test(el.textContent) && !pinyin.test(el.textContent)) {
     english.push(el.textContent)
    }

})


let frases = chino.length
let fonetica_temporal = fonetica.slice(0,frases)
let english_temporal = english.slice(0,frases)


let tabla = document.createElement("table")
tabla.classList.add("tabla1")

document.querySelector("body > table:nth-child(2) > tr:nth-child(1) > td")
document.querySelector("body > table:nth-child(2) > tr:nth-child(4) > td")

const tbl_chino = document.createElement("table")

let fila1 = [chino[0],fonetica_temporal[0],english_temporal[0]]
let fila2 = [chino[1],fonetica_temporal[1],english_temporal[1]]
let fila3 = [chino[2],fonetica_temporal[2],english_temporal[2]]
let fila4 = [chino[3],fonetica_temporal[3],english_temporal[3]]
let fila5 = [chino[4],fonetica_temporal[4],english_temporal[4]]


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

title.append(tabla)
