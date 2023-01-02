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

let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

let grd = ctx.createLinearGradient(0,0,100,0)
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);