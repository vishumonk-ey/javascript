const slider=document.querySelector("span")
const input=document.querySelector("input")
const upperCaseCheckbox=document.querySelector("#upperCase")
const lowerCaseCheckbox=document.querySelector("#lowerCase")
const numberCheckbox=document.querySelector("#number")
const symbolCheckbox=document.querySelector("#symbol")
let password=""
const upperCaseAlphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const lowerCaseAlphabets= 'abcdefghijklmnopqrstuvwxyz'.split("")
const numbers="0123456789".split("")
const symbols="!@#$%^&*()_+[]{}|;:,.<>?".split("")
const symbolsLength=symbols.length
console.log("vishal loves lipuuuu");
input.addEventListener('input', 
    function(e){
        password=""
        const inputValue=input.value
        console.log(inputValue);
        slider.innerHTML=inputValue
        slider.setAttribute("class","show")
        // const sliderDistanceFromLeft= parseInt(inputValue) * 2
        slider.style.left= parseInt(inputValue) * 2 + "%"
        document.querySelector(".pwdLengthDisplay").querySelector("span").innerHTML=inputValue
        generatePassword(inputValue)
    },
    false)
input.addEventListener("blur",function(e)
{
    slider.classList.remove("show")
},false)

function generatePassword(pwdLength){
    if(upperCaseCheckbox.checked || lowerCaseCheckbox.checked || numberCheckbox.checked || symbolCheckbox.checked){
        for (let i = 0; i < pwdLength; i++) {
            const randomNum= Math.floor( Math.random() * 4 )
            console.log("working");
    
            switch (randomNum) {
                case 0:
                    if(upperCaseCheckbox.checked){
                        const randomNumUpper=Math.floor( Math.random() * 26)
                        password+=upperCaseAlphabets[randomNumUpper]                
                    }else{
                        i--
                    }
                    break;
                case 1:
                    if(lowerCaseCheckbox.checked){
                        const randomNumLower=Math.floor( Math.random() * 26)
                         password+=lowerCaseAlphabets[randomNumLower]
                    } else{
                        i--
                    }
                    break;
                case 2:
                    if(numberCheckbox.checked){
                            const randomNumForNumber=Math.floor( Math.random() * 10)
                        password+=numbers[randomNumForNumber]
                    }else{
                        i--
                    }
                    break;
                case 3:
                    if(symbolCheckbox.checked){
                        const randomNumSymbol=Math.floor( Math.random() * symbolsLength )
                        password+=symbols[randomNumSymbol]
                    }else{
                        i--
                    }
                    break;
            
                default:
                    break;
            }
            
        }
        console.log(password,1);
        document.querySelector(".password").innerHTML=password
        console.log(password);
    }else{
        document.querySelector(".password").innerHTML="Please tick any of the checkbox ."
        document.querySelector(".password").style.color="Orange"
    }
}
