// ###### dateeee------> object

const newDate= new Date()
console.log(newDate);
console.log(Date.now());

console.log(newDate.toString());
console.log(newDate.toLocaleString());
console.log(Date.now().toLocaleString());
// Date.now().toLocaleString krkee mereko epoch se time mil rha hai but new Date() krke vo acche se date and time de rha hai
// console.log(newDate.toDateString());
// console.log(typeof Date.now());
// date.now()-->number data type  ---------------<
// new Date()-->object data type 
// console.log(typeof new Date());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleTimeString());
// console.log(newDate.getTime());

const myCreatedDate=new Date(1970,0,1,5,5)
// iss case mme month 0 se start horhe hainnn 
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.getTime());
const myNewDate= new Date("2024-01-13")
// console.log(myNewDate.toDateString());

const newDateOne=new Date()
console.log(newDateOne.toLocaleString('default',{
    weekday:'short',
}));

// we can customize the way we want our date in locale string.