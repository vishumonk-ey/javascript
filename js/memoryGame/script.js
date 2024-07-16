let startTimer = true;
let prevCard = null;
let move = 0;
const url1="https://images.unsplash.com/photo-1719508818474-08e50186c9e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const url2="https://images.unsplash.com/photo-1699409078708-eb1de9050015?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const url3="https://images.unsplash.com/photo-1703639854634-a1b3d5722c32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let pairsRem = document.querySelectorAll(".card").length / 2;
const movesDisplay = document.querySelector(".Moves");
const timer = document.querySelector(".time");
const restartBtn = document.querySelector(".restart")
function assignImages(){

}
document.querySelectorAll(".back").forEach(assignImages)
const cardEventListener = function (e) {
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
    restartBtn.classList.add("show")
  }
}
document.querySelectorAll(".card").forEach(function (elmnt, index) {
  elmnt.addEventListener("click", cardEventListener, false);
});

function playGame(e) {
  if (!prevCard) {
    prevCard = e;
    e.currentTarget.removeEventListener("click", cardEventListener);
  } else if (
    prevCard.target.parentElement.querySelector(".back").innerHTML ==
    e.target.parentElement.querySelector(".back").innerHTML
  ) {
    pairsRem--;
    e.currentTarget.removeEventListener("click", cardEventListener);
    prevCard=null
    checkRemPair();
  }else{
    setTimeout(function(){
        prevCard.target.parentElement.classList.remove("flipped")
        e.target.parentElement.classList.remove("flipped")
        prevCard.target.parentElement.addEventListener('click',cardEventListener,false)
        prevCard=null
    },1000)
  }
}
