console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.scripts)
console.log(document.styleSheets)
setTimeout(()=>{
console.log(document.getSelection().toString())
},2000)

document.write("<h1>hola</h1>")