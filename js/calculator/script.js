const allClear=document.getElementById("allClear")
const delBtn=document.getElementById("delete")
const arithOp=document.getElementById("arithOp")
const calculate=document.getElementById("calculate")
const inputDisplay=document.querySelector(".inputDisplay")
let allowArithOp=false
const addInput=function(e){
    if(e.target.id=="arithOp"){
        if(allowArithOp){
            inputDisplay.innerHTML+=e.target.innerHTML
        }
    }else if(e.target.id=="allClear"){
        allowArithOp=false
        inputDisplay.innerHTML=""
    }else if(e.target.id=="delete"){
        const userInput=inputDisplay.innerHTML
        inputDisplay.innerHTML=userInput.slice(0,userInput.length - 1)
        if(inputDisplay.innerHTML.length===0){
            allowArithOp=false
        }
    }else if(e.target.id=="calculate"){
        calculateFunc(e)
    }else{
        console.log("fireddd");
        inputDisplay.innerHTML+=e.target.innerHTML
        allowArithOp=true
    }
}
document.querySelector(".container").addEventListener
('click',function(e){
    if(e.target.tagName=="P"){
        console.log("fired");
        addInput(e)
    }
},false)
function calculateFunc(e){
    inputDisplay.innerHTML=eval(inputDisplay.innerHTML)
    // eval function is bad and has security risks , arguement should always be string . if arguement is other than string then it will return it as it is .. fo e.g string object
}
