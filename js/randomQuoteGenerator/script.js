const quoteContainer= document.querySelector(".quoteContainer")
const container=document.querySelector(".container")
const button = document.createElement("button")
let quotes;
button.innerHTML=`<i class="ri-arrow-right-line"></i>`
const p=document.createElement("p")
const requestUrl="https://type.fit/api/quotes"
fetch(requestUrl)
.then( function(response){
    return response.json()
})
.then(function(quote){
    container.appendChild(button)
    quotes=quote
})
.catch(function(error){
    console.log('error occured',error);
})

container.addEventListener('click',function(e){
    if(e.target.tagName==="BUTTON" || e.target.tagName==="I" ){
        const randomNum = Math.floor(Math.random()*16)
        console.log(quotes[randomNum].title);
        p.innerHTML=`
        <span><i class="ri-double-quotes-l"></i></span>
                    ${quotes[randomNum].text} 
                    <span><i class="ri-double-quotes-r"></i></span>
        
                    
                     <li>~ ${quotes[randomNum].author}</li>
        `
        quoteContainer.appendChild(p)
    }
},false)
