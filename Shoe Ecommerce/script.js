const Slider = document.querySelector("#shoedisplay .shoes .shoeimg")
const menuItem = document.querySelectorAll(".menuitem")

menuItem.forEach(function(items, index){
    items.addEventListener("click",function(){
        Slider.style.transform = `translateX(${-100 * index}vw)`
    })
})