let startTimer = true;
let prevCard = null;
let move = 0;
const url1 =
  "https://images.unsplash.com/photo-1719508818474-08e50186c9e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const url2 =
  "https://images.unsplash.com/photo-1699409078708-eb1de9050015?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const url3 =
  "https://images.unsplash.com/photo-1703639854634-a1b3d5722c32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let pairsRem = document.querySelectorAll(".card").length / 2;
const movesDisplay = document.querySelector(".Moves");
const timer = document.querySelector(".time");
const restartBtn = document.querySelector(".restart");
const backCards = document.querySelectorAll(".back");
let url1Counter = 0;
let url2Counter = 0;
let url3Counter = 0;
let time=0
let stopwatch
function assignImages() {
  for (let index = 0; index < backCards.length; index++) {
    const randomNum = Math.floor(Math.random() * 3);
    console.log(`Index: ${index}, RandomNum: ${randomNum}, url1Counter: ${url1Counter}, url2Counter: ${url2Counter}, url3Counter: ${url3Counter}`);

    switch (randomNum) {
      case 0:
        if (url1Counter < 2) {
          backCards[index].innerHTML = `<img src=${url1}>`;
          url1Counter++;

        } else {
          index--;
        }
        break;
      case 1:
        if (url2Counter < 2) {
          backCards[index].innerHTML = `<img src=${url2}>`;
          url2Counter++;
        } else {
          index--;
        }
        break;
      case 2:
        if (url3Counter < 2) {
          backCards[index].innerHTML = `<img src=${url3}>`;
          url3Counter++;
        } else {
          index--;
        }
        break;

      default:
        break;
    }
  }
}
assignImages()
const cardEventListener = function (e) {
  if(startTimer){
    startTimer=false
     stopwatch=setInterval(function(){
      time++
      timer.innerHTML=time
    }
    ,1000)
  }
  move++;
  movesDisplay.innerHTML = move;
  e.currentTarget.classList.add("flipped");
  console.log(e.currentTarget);
  //   flipped add horhi hai aur remove bhi horhi hai second time me but why does my console doesnt shows the card with flipped class?

  playGame(e);

  // e would be event but e.target would be front
};
function checkRemPair() {
  if (pairsRem == 0) {
    document.querySelector(".display").innerHTML = "You Won !!!";
    restartBtn.classList.add("show");
    clearInterval(stopwatch)
  }
}
document.querySelectorAll(".card").forEach(function (elmnt, index) {
  elmnt.addEventListener("click", cardEventListener, false);
});

function playGame(e) {
  if (!prevCard) {
    prevCard = e;
    e.currentTarget.removeEventListener("click", cardEventListener);
    // removeEventListener requires two arguement..ek to event itself which has to be removed and second callback function which we added while listening the event..we have to prob=vide same callback function
    // agar maine function directly addEventListener ke andar likha tha and copy krke me removeEventlistener me paste krdu to they both wont be same even though will look identical
// jab bhi aise function likhte hain to uss function ka naya instance create hojata hai mtlb dono ka reference alg hai.. to if i want to removeEventlistener to dhyaan rkhna ki mai addEventListener pe callback ka reference du and same reference remove krte time bhi du
  } else if (
    prevCard.target.parentElement.querySelector(".back").innerHTML ==
    e.target.parentElement.querySelector(".back").innerHTML
  ) {
    pairsRem--;
    e.currentTarget.removeEventListener("click", cardEventListener);
    prevCard = null;
    checkRemPair();
  } else {
    setTimeout(function () {
      prevCard.target.parentElement.classList.remove("flipped");
      e.target.parentElement.classList.remove("flipped");
      prevCard.target.parentElement.addEventListener(
        "click",
        cardEventListener,
        false
      );
      prevCard = null;
    }, 1000);
  }
}
document.querySelector(".container").addEventListener('click',function(e){
  if(e.target.tagName==="BUTTON"){
    restartGame()
  }
},false)

function restartGame(){
    url1Counter = 0;
    url2Counter = 0;
    url3Counter = 0;
    pairsRem=3
    document.querySelectorAll(".card").forEach(function (elmnt, index) {
      elmnt.addEventListener("click", cardEventListener, false);
      setTimeout(()=>elmnt.classList.remove("flipped"),
    600)
    });
    assignImages()
    move=0
    movesDisplay.innerHTML=move
    startTimer=true
    setTimeout(()=>{
      restartBtn.classList.remove("show")
      document.querySelector(".display").innerHTML = " ";
    },
    600)
    time=0
    timer.innerHTML=time
    
}
