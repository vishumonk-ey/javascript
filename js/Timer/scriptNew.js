let hourInput = document.querySelector(".hour");
let secondInput = document.querySelector(".second");
let minuteInput = document.querySelector(".minute");
let alertMessage = document.createElement("p")
alertMessage.setAttribute('class','alert')
alertMessage.innerHTML="Times Up !!!"
let playAgain=document.createElement("i")
playAgain.setAttribute('class','ri-play-circle-line')
playAgain.setAttribute('id','playAgain')
let pauseIcon= document.createElement("i")
pauseIcon.setAttribute('class','ri-pause-circle-line')
pauseIcon.setAttribute('id','pause')
let container=document.querySelector(".container")
let targetTime;
let intervalId
container.addEventListener('click',
    function(e){
        if(e.target.getAttribute('id')==='play'){
            targetTime=Date.now()+parseInt(hourInput.value)*60*60*1000 + parseInt(minuteInput.value)*60*1000 + parseInt(secondInput.value)*1000
            console.log(`${Date.now()} at the time of targetTime calc`);

            timerCountDown()
        }
    }
,false)

function timerCountDown(){
    intervalId = setInterval(function(){
        let timeDifference= targetTime - Date.now()
        console.log(`${Date.now()} at the time of countdown start`);
        hourInput.value= Math.floor(timeDifference / ( 60 * 60 * 1000 ))
        minuteInput.value = Math.floor((timeDifference % ( 60 * 60 * 1000 ))/(60 * 1000 ))
        // minuteInput.value = Math.floor(timeDifference / ( 60 * 1000 ))
        secondInput.value=Math.floor((timeDifference % ( 60 * 1000 ))/1000)
    }
    ,1000)
}