// function addTwoNumber(num1,num2){
//   console.log(num1+num2);
// }
// console krke bas print krva rhe hain and we cant store in any variable

// return shoyuld be used for storing

// addTwoNumber only referrence  +() execution
function addTwoNumber(num1,num2){
    if (num1===undefined || num2===undefined){
    console.log("please enter both values");
    return
    }
    
    return (`the sum of values are ${num1 + num2}`)
    // console.log("vishal"); return ke baad kuch bhi execute nhi hoga function se exit maarlega
}
let result = addTwoNumber(3,4)
console.log(result);

let resultOne= addTwoNumber(3)
console.log(resultOne);

