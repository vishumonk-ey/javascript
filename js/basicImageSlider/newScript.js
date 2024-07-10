const circles= document.querySelectorAll(".circles i")
const images= document.querySelectorAll(".imageSilderDiv img")
const imageSlider= document.querySelector(".imageSilderDiv")
const leftBtn = document.querySelector(".ri-arrow-left-s-line");
const rightBtn = document.querySelector(".ri-arrow-right-s-line");
const totalSlides=images.length
let currentSlide=0
let slideWidth= images[0].clientWidth
circles[0].classList.add("magnify")
// client width will give me the exact width in px including paddinng vagerah and excluding koi border margin etc, could have directly used hardcoded width value as given in css but if somehow the width of image is changed then this will only work
function updateSlider(){
    const toTranslate= - slideWidth * currentSlide
    imageSlider.style.transform=`translateX(${toTranslate}px)`
    circles.forEach((circle,index) => {
        if(index === currentSlide){
            circle.classList.add("magnify")
        }else{
            circle.classList.remove("magnify")
        }
    });
}
leftBtn.addEventListener('click',function(e){
    if(currentSlide==0){
        currentSlide=3
        updateSlider()
    }else{
        currentSlide--
        updateSlider()
    }
}
,false)

rightBtn.addEventListener('click',function(e){
    if(currentSlide != 3){
        currentSlide++
        updateSlider()
    }else{
        currentSlide=0
        updateSlider()
    }
},false)
// i can fire event manually :)
document.addEventListener('keydown',function(e){
    if(e.key==="ArrowLeft"){
        leftBtn.click()
    }else if(e.key ==="ArrowRight"){
        rightBtn.click()
    }
},false)