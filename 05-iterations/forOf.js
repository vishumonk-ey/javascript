// let myArray=[10,20,30,40]

// for (const arr of myArray) {
//     console.log(`elements are ${arr}`);
// }

// let userName='vishal kant'
// for (const name of userName) {
//     if(name==" "){
//        continue
//     }
//     console.log(`Each char is ${name}`);
// }

// map---------:::::
//can put only unique key and value pairs , is type of object
let countryMap= new Map()
countryMap.set("In","india")
countryMap.set("Fr","France")
countryMap.set("Jp","japan")
countryMap.set( 1,"all over")
// console.log(countryMap);
// important forOf on maps-::
// for (const [count,val] of countryMap) {
//     console.log(count,val);
// }

let myObject={
    name:'vishal',
    surname:"kant"
}
// objects arent iterable with forof
for (const key of myObject) {
    console.log(key);
}