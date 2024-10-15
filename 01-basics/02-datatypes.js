"use strict"/* all of our code will be treated as a newer version of js */
// alert(3+3); not defined in nodejs but will work in browser
let name= "vishal"
let age=19
let isLoggedIn= true
// data types
// number- range...
// max safe integer -> 2^53 - 1
// min safee integer -> -2^53 + 1
// bigInt- bhot bada number rkh
// boolean-true/false
// string- "" ''
// null- standalone value but is an object datatype 
// undefined
// symbol- unique 
// object
console.log(typeof age)
console.log(typeof "mitthu")
console.log(typeof null);  // object data type 
console.log(typeof undefined);//undefined data type
let sym1=Symbol()
console.log(typeof sym1=="symbol");
// directly cant compare with symbol as type of will return in a string 
console.log(typeof(typeof "null"));
console.log("ypeof ");
