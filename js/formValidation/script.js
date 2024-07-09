const firstNameInput=document.querySelector("#firstName")
const lastNameInput=document.querySelector("#lastName")
const firstNameCont=document.querySelector(".firstNameCont")
const lastNameCont=document.querySelector(".lastNameCont")
const userNameInput=document.querySelector("#userName")
const userNameCont=document.querySelector(".userNameCont")
const emailInput=document.querySelector("#email")
const emailCont=document.querySelector(".emailCont")
const passwordCont=document.querySelector(".passwordCont")
const captchaCont=document.querySelector(".captchaCont")
const passwordInput=document.querySelector("#password")
const captchaInput=document.querySelector("#captcha")
const TandCInput=document.querySelector("#TandC")
const genderButtons=document.querySelector(".genderSelect")
const TandCCont=document.querySelector(".TandCcont")

const passwordRegex=/^[0-9]+$/
const alphabet=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z']
const alphabetRegex= /^[a-zA-Z]*$/
const usernameRegex=/^[a-zA-Z0-9_]*$/
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// . in regex means it matches a single character to we used \. to escape uska predifened meaning and now it will match the literal dot
document.querySelector("#firstName").addEventListener('input',function(e){
       if(!firstNameInput.value){
        displayMessage(firstNameCont,"the firstname cant be empty")
        firstNameCont.classList.remove('green')
       }else{
        if ( alphabetRegex.test(firstNameInput.value) ){
            // regex.test(str) gives a boolean whether the pattern matches the string or not
                firstNameCont.classList.remove("red")
                firstNameCont.classList.add("green")
                if(firstNameCont.querySelector('p').innerHTML){
                    displayMessage(firstNameCont,"")
                }
           }else{
            firstNameCont.classList.remove("green")
            firstNameCont.classList.add("red")
            displayMessage(firstNameCont,"only alphabets can be used")
           }
       }
        
   }
,
false)
document.querySelector("#lastName").addEventListener('input',function(e){
    if(!lastNameInput.value){
        lastNameCont.classList.remove("green")
    }else{
        if ( alphabetRegex.test(lastNameInput.value) ){
            // regex.test(str) gives a boolean whether the pattern matches the string or not
                lastNameCont.classList.remove("red")
                lastNameCont.classList.add("green")
                if(lastNameCont.querySelector('p').innerHTML){
                    displayMessage(lastNameCont,"")
                }
           }else{
               lastNameCont.classList.remove("green")
               lastNameCont.classList.add("red")
              displayMessage(lastNameCont,"only alphabets can be used")
           }
       }
    }
     
     

,
false)
userNameInput.addEventListener('input',function(e){
    if(!e.target.value){
        userNameCont.classList.remove("green")
        userNameCont.classList.remove("red")
        displayMessage(userNameCont,"username cant be empty")
        
    }else{
        if(usernameRegex.test(e.target.value)){
            userNameCont.classList.add('green')
            userNameCont.classList.remove('red')
            if(userNameCont.querySelector('p').innerHTML){
                displayMessage(userNameCont,"")
            }
        }else{
            userNameCont.classList.add('red')
            userNameCont.classList.remove('green')
            displayMessage(userNameCont,"username isnt valid")
        }
    }
},false)
emailInput.addEventListener('input',function(e){
    if(!e.target.value){
        emailCont.classList.remove("green")
        emailCont.classList.remove("red")
        displayMessage(emailCont,"email cant be empty!")

    }else{
        if(emailRegex.test(e.target.value)){
            emailCont.classList.add('green')
            emailCont.classList.remove('red')
            if(emailCont.querySelector('p').innerHTML){
                displayMessage(emailCont,"")
            }
        }else{
            emailCont.classList.add('red')
            emailCont.classList.remove('green')
            displayMessage(emailCont,"email isnt valid")
        }
    }
},false)
passwordInput.addEventListener('input',function(e){
    if(!passwordInput.value){
        passwordCont.classList.remove("green")
        passwordCont.classList.remove("red")
        displayMessage(passwordCont,"password can't be empty")
    }else{
        if(passwordInput.value.length < 8){
            passwordCont.classList.add("red")
            passwordCont.classList.remove("green")
            displayMessage(passwordCont,"minimum length of password can be 8")
        }else{
            passwordCont.classList.add("green")
            passwordCont.classList.remove("red")
              displayMessage(passwordCont,"")
        }
    }
},false)
genderButtons.addEventListener('input',function(e){
    document.querySelector(".gender").classList.add('green')
},false)
const randomNumOne=Math.floor(Math.random()*50)
const randomNumTwo=Math.floor(Math.random()*50)
document.querySelector(".captchaText").innerHTML=`${randomNumOne} + ${randomNumTwo} =`
captchaInput.addEventListener('input',function(e){
    if(parseInt(captchaInput.value) != parseInt(`${randomNumOne+randomNumTwo}`) || !passwordRegex.test(captchaInput.value)){
        displayMessage(captchaCont,"wrong captcha")
        captchaCont.classList.remove('green')
        captchaCont.classList.add('red')
    } else{
        displayMessage(captchaCont,"")
        captchaCont.classList.add('green')
        captchaCont.classList.remove('red')
    }
},false)
TandCInput.addEventListener('input',function(e){
    if(TandCInput.checked){
        document.querySelector(".TandCcheckbox").classList.add("green")
        document.querySelector(".TandCcheckbox").classList.remove("red")
        TandCCont.querySelector("p:last-child").innerHTML=""
    }else{
        document.querySelector(".TandCcheckbox").classList.remove("green")
        document.querySelector(".TandCcheckbox").classList.add("red")
        TandCCont.querySelector("p:last-child").innerHTML=" please agree with the terms and conditions"
        TandCCont.querySelector("p:last-child").classList.add('textRed')
    }
},false)
function displayMessage(container,msg){
    container.querySelector('p').innerHTML=msg
    container.querySelector('p').classList.add('textRed')
}
