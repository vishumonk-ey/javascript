function samaan(name,price){
    this.name=name
    this.price=price
}
const chai= samaan("chai",20)
samaan.prototype.printMe=function(){
    console.log(`price of ${this.name} is ${this.price}`)
}
//kis ka name aur price print karu jisne (this) call kiya uska
chai.printMe()
// without  new keyword it is showing error even though printMe is present in prototype


// what does new keyword do---:
/*
 1. new keyword initiates the creation of new JS object.

 2. prototpe linking: new keyword links the prototype properties of the constructor function to the newly created JS object

 3. constructor function is called and values are injected ... if not explicitly returned anything then it assumes that return value has to be this newly created object itself.

 */
