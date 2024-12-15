console.log(null>0);
console.log(null==0);
console.log(null>=0);
// comparison converts null into number while equality check doesnt
// null sometimes converted into NaN and sometimes in zero
// avoid these type of conversions in which data type gets different.

// === strict check -> it will check datatype also

// console.log("2"==2);  true 
// console.log("2"===2); faalse
console.log(" ">=0);
console.log(Number(" "));

