const object1={
    user: 'vishal',
    phone:'8178004358',
    welcomeMessage: function(){
        console.log(`hello ${this.user}`)
        console.log(this)
    }
}
// object1.welcomeMessage()
// console.log(this) ---- ye  node me empty paranthesis deta hai as a global object and in console /browser it gives a window object!!!! 
function mitthu(){ let uusername="mitthu"
    console.log(this.uusername)
}
mitthu()
// ___________________arrow_________________
let vishal=()=>{
    let username="vishu"
    console.log(this)
}
// arrow function ke andar this kiya to empty parenthesis dediya and simple function kke andar bhot saari cheezein arhi hai
// vishal()

// let addTwo= (num1,num2) => {
//     return num1+num2
// }
// implicit return in arrow function onnly possible when written in single line
// let addTwo= (num1,num2) => 

//     num1+num2


let addTwo= (num1,num2) => ( {username:'vishal'} )
console.log(addTwo(2,3))
// braces ke andar return likhna hi padega!!!!


