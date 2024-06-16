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

// reduce is used for summing up value in arrays