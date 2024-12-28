let myName="vishal   "
Object.prototype.vishal= function(){
    console.log("vishal har jagah haii");
    
}
Array.prototype.heyVishal=function(){
    console.log("vishal hii bol rha hai");
    
}

let teacher={
    makeVideo: true
}
let student ={
    studentAvailable: true
}

// teacher.__proto__=student
// this is prototypal inheritance teacher inehrited the prop of students


// __proto__ is old syntax . we have a syntactic sugar 
Object.setPrototypeOf(teacher,student)
String.prototype.trueLength=function(){
    console.log(this);
    console.log(`true length is ${this.trim().length}`);
    
    
}