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

// we dont know the number of parameters
// rest operator

function addCartValue(val1,val2,...Num1){
    return Num1
}

console.log(addCartValue(200,300,400,500,600))

function handleObject(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

handleObject({
    username:"vishal",
    price:"10000"
})

function returnThirdValue(anyArray){
    console.log(`the third value of the given array is ${anyArray[2]}`)
}
 let myArray=[2,3,4,5,5]
 returnThirdValue(myArray)
 returnThirdValue([1,2,3])

