let score = true
// console.log(typeof score);
let valueInNumber= Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// "33"=> 33
// "33avs"=> NaN
// "true"-1/ "false"-0 ---> NaN because string with characters agr boolean ho to it will show 1 and 0
// null - 0

let isLoggedIn="vishal"
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
//  0 - false 
// 1 and other no.s - truee
// ""     - false
// " "    -> ture
// "vishuuu"   - true

let someNumber=null
let stringNumber=String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
// OPERATIONS
console.log(2%4);
let str1="hello"
let str2="vishal"
let str3= str1+str2
// string concatenation space add nhi krta 
console.log(str3);
console.log("1"+2);
console.log(1+"2");
 console.log("1"+3+2); 
//  string first so everything treated as string
console.log("1*2"+4+2); 
// string last so first operation is done then treated as a string
let x=2n
let y= ++x
console.log(y);
console.log(typeof y);
console.log(typeof NaN);
console.log( Number(""));
