// $$$$$$$$$$ arrayyyyyyy-;;;;;;;
const myArr=[1,2,3,4,5,6]
const myArrTwo=myArr
myArrTwo.push("new")
// console.log(myArr); 
// reference based data type
const myArrOne=new Array(1,2,4,5,5,6,6) /* no need of square brackets here */
// elements can be of mixed data type
// console.log(myArr[0]);

// array methods
// at last
myArr.push("vishal") /* for adding a new element */
myArr.pop() /* last element will be removed */
// console.log(myArr);

// at start -:
myArr.unshift("start") /* adding to the start */
// console.log(myArr);
myArr.shift(); /* removing the element at start */
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(99)); /* jo element nhi hai uske liye index negative ajayega */
//*************** slice doesnt changes original array but splice does changes original array********
const arrOne=[0,1,2,3,4,5]
console.log(arrOne.slice(0,3));
console.log(arrOne);

console.log(arrOne.splice(0,0,"mitthu")) /* for removing elemets and will return the deleted*/
console.log(arrOne);