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

const template = document.getElementById("template").content
const fragmento = document.createDocumentFragment()
const gallery = document.getElementById("gallery")

galleryContent.forEach((el)=>{
  template.querySelector("img").setAttribute("src",el.img)
  template.querySelector("img").setAttribute("alt",el.title)

  let clone = document.importNode(template,true)

  fragmento.append(clone)
})

gallery.append(fragmento)