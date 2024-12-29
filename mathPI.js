const vishu={
    name: "vishal",
    age: 19,
    
    hello: function(){
        console.log("hello bol rha hu");
    }
}
console.log(Object.entries(vishu))

for (let [key,value] of Object.entries(vishu)) {
    if(typeof value != 'function' )
    console.log(`${key}:${value}`)
}
const propOfName=Object.getOwnPropertyDescriptor(vishu,"name")
console.log(propOfName);
Object.defineProperty(vishu,"name",{
    writable:false,
    enumerable:false,
    configurable:false
})
// enumerable false so to when i will iterate ye iterate nhi hoga 
//rewrite nhi krsksta isko

