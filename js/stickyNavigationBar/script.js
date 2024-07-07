const body=document.querySelector("body")
const navbar=document.querySelector("nav")
const menu= document.querySelector(".ri-menu-line")
const cancelBtn=document.querySelector(".ri-close-line")
const links=document.querySelector(".links")
menu.addEventListener('click',function(e){
    links.classList.add("show")
    menu.classList.add("hide")
    body.classList.add("disableScroll")
},false)
cancelBtn.addEventListener('click',function(e){
    links.classList.remove("show")
    menu.classList.remove("hide")
    body.classList.remove("disableScroll")

},false)
window.addEventListener('scroll',function(e){
    this.scrollY>20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
    // classList.remove() agr meri class exist hi nahi krti hai to ye kuch nhi krega but wont show an error
    // scrollY measures the distance in px  btwn top of the viewport and the top of the document
},false)