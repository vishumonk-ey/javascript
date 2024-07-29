// singleton - constructor se banega 
// Object.create

//  literals se nahi banta

// object literals
const mySym= Symbol("key1")
// symbol data type even though same description but still both of em are different
const mySymNew= Symbol("key1")
const JsUser={
    name:"Vishal",
    age:19,
    [mySymNew]:"jojoj",
    [mySym]:"pepepe", /* symbol declaration in object syntax INTERVIEW*/
    "full name" : 'Vishal Kant',
    email: "vkant2005@gmail.xom",
    greetingTwo:function(){
        console.log(`hello ${this["full name"]}`)
    },
    nickName:function(){
        console.log(`my fullname is ${this["full name"]}`);
    }

}
// console.log(JsUser[mySymNew]);
// console.log(JsUser["full name"]);
// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym])
// keys are generally stored as string in system prr hamne symbol ko bhi key liya !!!!1
 JsUser.age=18;
//  Object.freeze(JsUser)  ----- now value wont be changed
JsUser.greeting=function (){
    console.log("hello jsUser");
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(typeof mySym);