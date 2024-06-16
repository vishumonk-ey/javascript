// const num=[1,2,3,4,5,6,7,8,9,10]
// const newArr=num.map( (item)=>{
//    return item>4
// })
// map pr return me condition nhi deskte but in filter return me condition dete hain and jab true hogi condition tab vo return kr dega item
const num=[1,2,3,4,5,6,7,8,9,10]
const newArr=num.map(
    (item)=>{
        return item+10
    }
)
console.log(newArr);
// chaining ==> we can use more than one method

let newArrOne= num
                .map( (item)=>item*2)
                .map( (item)=>item+10)
                .filter( (item=>item>10))
// second map me item will be after application of first map
console.log(newArrOne);