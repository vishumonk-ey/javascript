let name="vishal"
let age = 19
// console.log(name + age); dont use instead string interpolation

console.log(`hello my name is ${name} and i am ${age} years old`);

const gameName=new String(`vishal`) /* another way of declaring a string*/
console.log(gameName.length);
console.log(gameName[0]); 
/*
gameName[0]=v
gameName[1]=i
gameName[2]=s
gameName[3]=h
gameName[4]=a
gameName[5]=l
 not an array but key value pair */
 
// console.log(gameName.__proto__);???????
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

let myName="vishhuu"
let anotherString= myName.substring(1 , 4) /* last vala isnt included and we cant put negative values alsoooo */
console.log(anotherString.length);

 let newString=myName.slice(0,9) 
 
 /*output will be empty string if my index start is greater or equal to the strlength*/

//  index start is included and index end is excluded. if index end isnt given or is greater then strlen then string will be extracted till end

// sabse piche vala char ka index hai -1 

// str.lastindexof() --- for last occurence ka index
// str.indexof()---- for first occurence index

console.log(newString);
 
let newStringOne="    vishaallll     "
console.log(newStringOne.trimEnd()); 
// trim removes empty spaces.

const url = "mitthu-loves-to-eat-everything" 
console.log(url.replace('-',' '));
// replace is changing only first occurence to change all use replaceAll
console.log(url.includes("o"));
console.log(url.split("-"))
console.log(url.split());
// split can be used for converting a string into substrings and then converts them into array on the basis of certain condition.
// %%%%%%%%%%% str.concat()
let stringOne="hello"
let stringTwo="hello world"
console.log(stringOne.charAt(stringOne.length-1));
//^ for last chaaracter === str.length-1
let result= stringOne.concat("my",stringTwo,gameName)
console.log(result);
// console.log(stringTwo.endsWith("world"));
// console.log(stringOne.startsWith("h"));





