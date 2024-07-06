let heading = document.querySelector("h1");
let para = document.querySelector("p");
let button = document.querySelector("button");
let stopButton=document.createElement("button")
stopButton.setAttribute("class","stop")
const buttonDiv=document.querySelector(".button")
let randomNum;
button.addEventListener('click',function(e){
   randomNum=Math.floor(Math.random()*2)
   checkNum(randomNum)
})
function checkNum(num){
    if(num===0){
        displayMessageinHeading('You seem to be <span>Lucky</span> !')
        displayMessageinPara("We are really sorry we cant give you false hope, beauty of your face contradicts our guess . Maybe our software is malfunctioning. Why dont you try again ? ")
        button.innerHTML="Try again !"
        stopButton.innerHTML="stop this bs"
        buttonDiv.appendChild(stopButton)
        stopButton.addEventListener('click',stopTheGame,false)  
        button.addEventListener('click',function(e){
            randomNum=Math.floor(Math.random()*2)
            checkNum(randomNum)
        },false)
    }
    else{
        displayMessageinHeading('Sorry to say but you are <span>unlucky</span> my friend !')
        displayMessageinPara(`Thats why your parents don't love you ! You are a lazy pig my friend .You know what, You deserve to be executed in front of an old age home with all the sexy grannies looking at you . Never mind, grannies won't look at you or else they will die . Why dont you try again my friend?`)
        button.innerHTML="Try again!"
        stopButton.innerHTML="stop and f you"
        buttonDiv.appendChild(stopButton)
        stopButton.addEventListener('click',stopTheGame,false)  
        button.addEventListener('click',function(e){
            randomNum=Math.floor(Math.random()*2)
            checkNum(randomNum)
        },false)
    }
}

function displayMessageinHeading(message){
    heading.innerHTML=message
}
function displayMessageinPara(message){
    para.innerHTML=message
}
function stopTheGame(){
    heading.innerHTML="Test your Luck !"
    para.innerHTML="Guessing whether you are lucky or a straight disgrace to society ! "
    button.innerHTML="Start!"
    stopButton.remove()
}