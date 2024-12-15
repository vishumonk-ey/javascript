// const myArr=[1,2,3,4]
// const total=myArr.reduce( (acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)
// console.log(total)






let myArray=[1,2,3,4,5]
// let total=myArray.reduce( (acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`)
//    return acc*currval
// },1 )

// console.log(total);

const shoppingCart=[  
    {
        item:"js",
        price:2999,
    },
    {
        item:"py",
        price:5999,
    },
    {
        item:"rb",
        price:4000,
    }
]
 total=shoppingCart.reduce( (acc,currval)=>{
 return acc+currval.price
},0)
console.log(total);
// if there is no accumulator val specified then the first element becomes the accumulator value and the callback function start from 2nd element.
// if there is only one elmnt in array and no initial value specified then the 1st elmnt will become the accumulator value but there wont be any current value so no cb calling
// if there is an empty array and an initial value specified still no cb calling and if no initital value then type error.
// reduce is used for summing up value in arrays but can be used for more than this
