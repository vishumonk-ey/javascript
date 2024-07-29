const tinderUser=new Object() /*singleton object */
// const tinderUser={} non singleton

tinderUser.id="123abc"
tinderUser.name="vishaaaaal"
tinderUser.isLoggedIn=true

// console.log(tinderUser);

const user={
    name:{
        userfullname:{
            firstname:"mitthu",
            lastname:"kant"
        }
    }
}

// console.log(user.name.userfullname.firstname);
// console.log(user.firstname);

const obj1={1:"a" ,
            2:"b",
}
const obj2={3:"a" ,
            4:"b",
}
// let obj3={obj1,obj2}  obj1 and obj2 key hogya and value hogyi
const total=Object.assign({},obj1,obj2) 
const totalNew= Object.assign(obj1,obj2)
// target object ko bhi badal diya jaa rha hai 
// console.log(totalNew);
// console.log("obj1",obj1);
/* assign mera dono objects ko merge kr dega and first vala mera target hai aur baaki source hainnn ... target me source ko merge kr diya jayega and in end mera total aur target dono same honge*/
// console.log(total);
// console.log(obj1);
// console.log(obj2);

// const obj3={...obj1,...obj2} spread operator..

console.log(Object.keys(tinderUser)); /* returns data type of array */
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 
console.log(tinderUser.hasOwnProperty("name"));

//destructuringggggggg
 
const course={
    name:'JS in Hindi',
    courseInstructor:'Hitesh',
}
// const se object declare krdiya means the refference of the object is fixed. vapas se course naam se kuch nhi declare kr sktA
let {courseInstructor: inst}=course
let {name: naam} = course
console.log(naam);
console.log(inst);

