(function chai() {
    console.log('DB connected')
    // named IIFE
})() ;

// jab do iife ek saath likh rha hu to pehla vala semicolon se end krna padega 
// khudka private scope create krta hai agar isme var se variable declare krunga to uske bahar ye variable ka access nahi dega 
( (name) => { 
    console.log(`db connected again ${name}`)
} )("vishal")
// iife ke case me jo global scope mtlb jo upar declare kiye gayein hai variable vo function me dikkat na de isliye hum use krte hain
