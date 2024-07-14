const canvas = document.querySelector(".canvas");
const canvasAPI = document.querySelector("#canvas");
const ctx= canvasAPI.getContext("2d")
canvasAPI.width=canvasAPI.offsetWidth
canvasAPI.height=canvasAPI.offsetHeight
const clearBtn = document.querySelector(".clearBtn");
const eraseBtn = document.querySelector(".eraseBtn");
const colorBtn=document.querySelector("#colorBtn")
const colorMenu=document.querySelector(".color")
let isClicked;
let prevClientX;
let prevClientY;
let i;
window.addEventListener('resize',function(e){
    canvasAPI.width=canvasAPI.offsetWidth
    canvasAPI.height=canvasAPI.offsetHeight
},false)
canvas.addEventListener(
  "mousedown",
  function (e) {
    isClicked = true;
    ctx.beginPath()
    // starts a new path
  },
  false
);
// mousemove event will keep firing until it is being moved and mouse down will fire only once agar mai usko dabake rkhunga to bhi
canvas.addEventListener(
  "mousemove",
  function (e) {
    console.log("fired");
    if (isClicked) {
      drawFunction(e);
    }
  },
  false
);
canvas.addEventListener(
  "mouseup",
  function (e) {
    isClicked = false;
  },
  false
);
function drawFunction(e) {
  ctx.lineTo(e.offsetX,e.offsetY)
//   this creates a new point and uss point tk ek line draw krdega which starts from previous specified point(jahape phle ye run kiya tha), agar nahi hai to vhi se start hojayeg
  ctx.stroke()
//  creates an outline and iski vjh se visible hopaata hai. 
}
canvas.addEventListener('mouseout',function(e){
    isClicked=false
},false)
clearBtn.addEventListener(
  "click",
  eraseAll,
  false
);
eraseBtn.addEventListener(
  "click",
  function (e) {
    ctx.strokeStyle="White"
    colorMenu.querySelectorAll("li").forEach(function(col,ind){
      col.classList.remove("selected")
    })
  },
  false
);
function eraseAll(){
    ctx.clearRect(0,0,canvasAPI.width,canvasAPI.height)
    // why does it not works when i am using canvas width and height instead of canvasAPI

}
colorBtn.addEventListener("click",function(e){
    colorMenu.classList.add("show")
    if(e.target.id==="Red"){
      ctx.strokeStyle="Red"
      colorMenu.querySelectorAll("li").forEach(function(col){
        if(col.id=="Red"){
          col.classList.add("selected")
        }else{
          col.classList.remove("selected")
          colorMenu.classList.remove("show")
        }
      }
    )
    }else if(e.target.id==="Blue"){
      ctx.strokeStyle="Blue"
      colorMenu.querySelectorAll("li").forEach(function(col){
        if(col.id=="Blue"){
          col.classList.add("selected")
        }else{
          col.classList.remove("selected")
        }
      })
      colorMenu.classList.remove("show")
    }else if(e.target.id==="Green"){
      ctx.strokeStyle="Green"
      colorMenu.querySelectorAll("li").forEach(function(col){
        if(col.id=="Green"){
          col.classList.add("selected")
        }else{
          col.classList.remove("selected")
        }
      })
      colorMenu.classList.remove("show")
    }else if(e.target.id==="Black"){
      ctx.strokeStyle="Black"
      colorMenu.querySelectorAll("li").forEach(function(col){
        if(col.id=="Black"){
          col.classList.add("selected")
        }else{
          col.classList.remove("selected")
        }
      })
      colorMenu.classList.remove("show")
    }
},false)
document.querySelector("#fontWidthRange").addEventListener('input',function(e){
  const fontWidth=e.target.value
  ctx.lineWidth=`${fontWidth}`
},false)