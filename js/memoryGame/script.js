document.querySelector(".card").addEventListener('click',function(e){
    e.currentTarget.classList.toggle("flipped")
    console.log("done");
},false)