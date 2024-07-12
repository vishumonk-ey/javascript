const canvas= document.querySelector(".canvas")
const clearBtn = document.querySelector(".clearBtn")
const undoBtn = document.querySelector(".undoBtn")
let isClicked
let prevClientX
let prevClientY
const canvasApi=document.querySelector("#canvas")
const ctx=canvasApi.getContext("2d")
canvas.addEventListener('mousedown',function(e){
    isClicked=true
    prevClientX=e.clientX
    prevClientY=e.clientY
    drawFunction(e.clientX,e.clientY)
},false)
// mousemove event will keep firing until it is being moved and mouse down will fire only once agar mai usko dabake rkhunga to bhi
canvas.addEventListener('mousemove',function(e){
    console.log("fired");
    if(isClicked){
        drawFunction(prevClientX,prevClientY,e.clientX,e.clientY)
        prevClientX=e.clientX
        prevClientY=e.clientY
    }
},false)
canvas.addEventListener('mouseup',function(e){
    isClicked=false
},false)
function drawFunction(prevX,prevY,currX,currY){
    // const drawingText= document.createElement("p")
    // drawingText.style.left=`${xPos}px`
    // drawingText.style.top=`${yPos}px`
    // canvas.appendChild(drawingText)
    ctx.beginPath()
    ctx.moveTo(prevX,prevY)
    ctx.lineTo(currX,currY)
    ctx.stroke()
}
clearBtn.addEventListener('click',function(e){
    canvas.querySelectorAll("p").forEach(function(elmnt){
        elmnt.remove()
    })
}
,false)
undoBtn.addEventListener('click',function(e){
    const length = canvas.querySelectorAll("p").length
    canvas.querySelectorAll("p")[length-1].remove()
}
,false)