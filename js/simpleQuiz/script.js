let data;
let i = 0;
let j = 0;
const restartButton = document.createElement("button");
restartButton.setAttribute("class", "restartBtn");
restartButton.innerHTML = "Restart quiz";

const quizEndText = document.createElement("p");
const displayText = document.createElement("p");
const score = document.createElement("p");
score.setAttribute("class", "scoreText");
let startButton = document.createElement("button");
startButton.innerHTML = "Start the Quiz";
startButton.setAttribute("class", "startButton");
const questionText = document.createElement("p");
fetch("https://opentdb.com/api.php?amount=49&difficulty=easy&type=multiple")
  .then(function (response) {
    document.querySelector(".landingPage").appendChild(startButton);
    return response.json();
  })
  .then(function (response) {
    data = response;
  })
  .catch((error) => console.log("error", error));

document.querySelector(".container").addEventListener(
  "click",
  function (e) {
    if (e.target.getAttribute("class") === "startButton") {
      e.target.parentElement.remove();
      displayQuestion();
    } else if (e.target.getAttribute("class") === "correctAnswer") {
      displayText.innerHTML = "Correct !";
      displayText.style.color = "Green";
      document.querySelector(".score").appendChild(displayText);
      setTimeout(() => {
        document.querySelector(".score").removeChild(displayText);
        document.querySelector(".question").removeChild(questionText);
        const allOptions = document.querySelector(".options").children;
        Array.from(allOptions).forEach((opt) => {
          opt.remove();
        });
        i++;
        displayQuestion();
      }, 2000);
    } else if (e.target.getAttribute("class") === "incorrectAnswer") {
      displayText.innerHTML = " iNCORRECT !";
      displayText.style.color = "Red";

      document.querySelector(".score").appendChild(displayText);
      setTimeout(function () {
        const allOptions = document.querySelector(".options").children;

        Array.from(allOptions).forEach((opt) => {
          opt.remove();
        });
        document.querySelector(".score").removeChild(displayText);
        document.querySelector(".question").removeChild(questionText);
        displayQuestion();
      }, 2000);
    } else if (e.target.getAttribute("class") === "restartBtn") {
      i = 0;
      j = 0;
      document.querySelector(".forRestart").removeChild(restartButton)
      document.querySelector(".forRestart").removeChild(quizEndText)
      displayQuestion()
    }
  },
  false
);

function displayQuestion() {
  if (j != 10) {
    let randomNum = Math.floor(Math.random() * 40);
    questionText.innerHTML = data.results[randomNum].question;
    document.querySelector(".question").appendChild(questionText);
    data.results[randomNum].incorrect_answers.forEach((element) => {
      let option = document.createElement("li");
      option.innerHTML = element;
      option.setAttribute("class", "incorrectAnswer");
      document.querySelector(".options").appendChild(option);
    });
    // randomly inserting the options :) --> insertBefore any random li
    let correctAnswer = document.createElement("li");
    correctAnswer.innerHTML = data.results[randomNum].correct_answer;
    correctAnswer.setAttribute("class", "correctAnswer");
    let randomNumForOption = Math.floor(Math.random() * 3) + 1;
    const allOptions = document.querySelector(".options").children;
    document
      .querySelector(".options")
      .insertBefore(correctAnswer, allOptions[randomNumForOption]);
    if (!document.querySelector(".scoreText")) {
      score.innerHTML = " 0 / 10 ";
      document.querySelector(".score").appendChild(score);
    } else {
      score.innerHTML = ` ${i} / 10`;
    }
    j++
  } else {
    restartFunction();
  }
}
function restartFunction() {
  document.querySelector(".score").removeChild(score)
  quizEndText.innerHTML = `The Quiz has ended and your final score is  ${ i } / 10 `;
  document.querySelector(".forRestart").appendChild(quizEndText);
  document.querySelector(".forRestart").appendChild(restartButton);
}
