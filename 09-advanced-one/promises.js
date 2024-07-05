// // promises are objectsss..
// const promiseOne= new Promise( function(resolve,reject){
// // do any async task
// // db calls,cryptography,network calls

// setTimeout(function(){
//     console.log("async task completed");
//     resolve()
// },1000) 

// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'vishal'})
//     },1000)
// }).then(function(user){
//     console.log(user)
// })

// const promiseTwo= new Promise(function(resolve,reject){
//     let error=false
//     if(!error){
//         resolve({username:'vishal',password:'v2'})
//     }
//     else{
//         reject('Error: something went wrong')
//     }
// })
// promiseTwo
// .then((user)=>{
//     console.log(user.password)
//     return user.username
// })
// .then((userName)=>console.log(userName))
// .catch(function(err){
//     console.log(err)
// })

// by using async await

const promiseThree = new Promise(function(resolve,reject){
    let error=false
    if(!error){
        resolve({username:'vishal',password:'v2'})
    }
    else{
        reject('Error: something went wrong')
    }
})

async function consumingPromiseThree(){
    try {
        const response=await promiseThree
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumingPromiseThree()
// await pe aate hi function pause hojayega aur wait krega promise ka resolve yaa reject hone kaaa

async function consumingFetch(){
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("error")
    }
}
consumingFetch()

// const promiseFour= new Promise(function(resolve,reject){
    
// })