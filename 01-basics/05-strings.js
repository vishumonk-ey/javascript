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
console.log(anotherString);


