const code=[12,13,20]
// code.forEach( function (item) {
//     console.log(item*2);
// }  )
code.forEach( (item) => {
    // console.log(item*2)
    
})
// callback function dena hai to name nhi dena agar andar hi function define kr rha hu aur agar function pehle se defined hai to bas uska reference dena hai
// for each ke passs element , uske respective index and full array ka access hota hai !
let PrintMe= (item,index,arr) => {
    console.log(`element-: ${item} , index-: ${index}, full array-: ${arr}`)
}

// code.forEach(PrintMe)

let arr=[
    {username:'vishal',
     petname:"shaalu"
    },
    {username:'bong',
     petname:"pomi"
    },
    {username:'mitthu kant',
     petname:"motu"
    },
]

arr.forEach( 

    (item) => {
      console.log(item.username)
    }
)

