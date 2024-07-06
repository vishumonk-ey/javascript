let input = document.querySelector("#taskInput");
const button = document.querySelector("button");
const taskDiv = document.querySelector(".tasksDiv");
let closeIcon;
let done;
let task;
let blankAgain; 
function createNewTask(userInput) {
   task = document.createElement("div");
  task.setAttribute("class", "taskBlock");
  task.innerHTML = `
        <i class="ri-checkbox-blank-circle-line" id="blank"></i>
        <p class="inputText" id="input">${userInput}</p>
        <i class="ri-close-line" id="close"></i>
        `;
  taskDiv.appendChild(task);
  // console.log("called");
}
button.addEventListener(
  "click",
  function (e) {
    const userInput = input.value;
    createNewTask(userInput);
    input.value = " ";
  },
  false
);

taskDiv.addEventListener('click',
    function(e){
        const targetId=e.target.id
        if(targetId==="blank"){
          e.target.parentElement.setAttribute("class","checkedTask")
          const checkedIcon=document.createElement('i')
          checkedIcon.setAttribute('class',"ri-checkbox-circle-fill")
          checkedIcon.setAttribute('id',"checkedIcon")
          e.target.parentElement.replaceChild(checkedIcon,e.target)
        }
        else if(targetId==="close"){
          e.target.parentElement.remove()
        }
        else if(targetId==="checkedIcon"){
          e.target.parentElement.setAttribute('class',"taskBlock")
          const blankIcon=document.createElement('i')
          blankIcon.setAttribute('class',"ri-checkbox-blank-circle-line")
          blankIcon.setAttribute('id',"blank")
          e.target.parentElement.replaceChild(blankIcon,e.target)
        
        }
    }
    ,false)