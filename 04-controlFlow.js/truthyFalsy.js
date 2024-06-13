let userName="vishal"
if(userName){
    console.log("username hai");
}
else{
    console.log("dont have username")
}

// falsy values-:

// false,"",BigInt==>0n,0,-0,null,undefined,NaN

// truthy values

// " ","false","0",{},[],function(){}
// non empty string is always a truthy value

// let array=[]
// if(array.length==0){
//  console.log('array is empty');
// }
// for finding if we have an empty array

let emptyObj={
}
if(Object.keys(emptyObj).length==0){
    console.log('empty object');
}

// false=='',false==0,0==''---> will give true


null colaescing operator--:

??-> null and undefined na aye uske liye
 
let val1;
// val1=10 ?? 5  phli value le lega agr null/undefined nhi hai to
// val1=null ?? 10-- 10  value le lega
// val1= undefined ?? 15

