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

const template = document.getElementsByTagName("template")[0].content
const fragmento = document.createDocumentFragment()
const gallery = document.querySelector("div")

galleryContent.forEach((el)=>{
  template.querySelector("img").src = el.img;
  template.querySelector("img").alt = el.title;
  clone = document.importNode(template,true);
  fragmento.appendChild(clone)
})

gallery.appendChild(fragmento)