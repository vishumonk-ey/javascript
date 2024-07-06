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
let finalSecondsValue;
let finalHourValue;
let finalMinuteValue;
let intervalId;
document.querySelector(".container").addEventListener(
  "click",
  function (e) {
    if (e.target.getAttribute('id')==="play") {
      // console.log("lag gya");
      e.target.parentElement.replaceChild(pauseIcon,e.target)
      let userInputHour = parseInt(hourInput.value) || 0;
      let userInputMinute = parseInt(minuteInput.value) || 0;
      let userInputSeconds = parseInt(secondInput.value) || 0;
      if (userInputSeconds > 60) {
        finalSecondsValue = userInputSeconds % 60;
        userInputMinute += Math.floor(userInputSeconds / 60);
      } else {
        finalSecondsValue = userInputSeconds;
      }

      if (userInputMinute > 60) {
        finalMinuteValue = userInputMinute % 60;
        finalHourValue = userInputHour + Math.floor(userInputMinute / 60);
      } else {
        finalMinuteValue = userInputMinute;
        finalHourValue = userInputHour;
      }
      hourInput.value = "";
      hourInput.value = finalHourValue;
      minuteInput.value = "";
      minuteInput.value = finalMinuteValue;
      secondInput.value = "";
      secondInput.value = finalSecondsValue;
      timerCountdown(finalHourValue, finalMinuteValue, finalSecondsValue);
    }else if(e.target.getAttribute('id')==="pause"){
      clearInterval(intervalId)
      e.target.parentElement.replaceChild(playAgain,e.target)
    }else if(e.target.getAttribute('id')==="playAgain"){
      if((document.querySelector(".alert")) !== null){
        document.querySelector(".alert").remove()
      }
      timerCountdown(parseInt(hourInput.value),parseInt(minuteInput.value),parseInt(secondInput.value))
      e.target.parentElement.replaceChild(pauseIcon,e.target)
    }
  },
  false
);

function timerCountdown(fhv, fmv, fsv) {
  intervalId=setInterval(function () {
    // console.log("called");
    if (fsv !== 0) {
      fsv--;
      // finalSecondsValue=fsv
      console.log(fsv);
      secondInput.value = fsv;
      if (fsv === 0 && (fmv != 0 || fhv != 0)) {
        if (fmv != 0) {
          fmv--;
          minuteInput.value = fmv;
          fsv=60
          secondInput.value=60
           if (fmv === 0 && fhv != 0) {
            fhv--;
            hourInput.value = fhv;
            fmv=59
            minuteInput.value=59
            
          }
        } else if (fmv === 0 && fhv != 0) {
          fmv = 59;
          minuteInput.value = fmv;
          fhv--;
          hourInput.value = fhv;
        } 
      }
    } else if (fsv === 0 && (fmv != 0 || fhv != 0)) {
      if (fmv != 0) {
        fmv--;
        fsv = 59;
        secondInput.value=fsv
        minuteInput.value = fmv;
        if (fmv === 0 && fhv != 0) {
          fhv--;
          hourInput.value = fhv;
          fmv = 60;
        }
      } else if (fmv === 0 && fhv != 0) {
        fhv--;
        fmv = 59;
        fsv = 59;
      }
    }else if(fsv===0 && fmv===0 && fhv===0){
      // alert('time up')
      document.querySelector("span").replaceChild(playAgain,pauseIcon)
      document.querySelector(".container").appendChild(alertMessage)
      clearInterval(intervalId)
      
    }
  }, 1000);
  // set interval ke function ke liye arguements ham just after time interval likh skte hain!!
}

