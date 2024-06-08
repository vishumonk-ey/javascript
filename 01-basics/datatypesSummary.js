// datatypes***
// Primitive and Non Primitive . classified on the basis of how they are stored in the memory and how they are called from the memory
// $###Primitive -call by value

// 7 types-:
// string
// Number
// Boolean
// null
// Undefined
// symbol-for making unique
// BigInt



// let userEmail= undefined  undefined can be declared like this also
let userId
let id1= Symbol( "123")
let id2= Symbol( "123")
console.log(id1== id2);


// ## Non-Primitive/Refference  -> call by referrence
// Array,Object,function
let heroes=["mitthu", "shaalu"]
let myFunc= function name(params) {
    console.log("hello world");
}

let myobj={
    name:"shaalu",
    crime:"being cute"
}

console.log(typeof myobj);
console.log(typeof myFunc);
console.log(typeof heroes);
// *********************************************

// ###Memoryyyyy----:

// stack (primitive) and heap memory(non- primitive)
let str1= "mitthu"
let str2=str1
str2="motu"
console.log(str1);
console.log(str2);
// str2 ko ek copy mili str1 ki and if i changed str2 then no change in str1-> stack memory allocation

let userOne={
    email:"mitthu1234@gmail.com",
    num: 9891262500,
}
let userTwo= userOne
userTwo.email="vishal1234@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
// jo object hai vo jaake heap me store hogya and usertwo ko koi copy na milke original value mili and now if i changed anything in usertwo then it will change the original value also ---> Heap memory allocation