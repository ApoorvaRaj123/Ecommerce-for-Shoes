const Slider = document.querySelector("#shoedisplay .shoes .shoeimg")
const menuItem = document.querySelectorAll(".menuitem")



const products = [
    {
        id: 1,
        name: "Air Force",
        price: 300,
        bgcolor:"yellowgreen",
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "blue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        name: "Blazer",
        price: 150,
        bgcolor: "rgb(92, 28, 92)",
        colors: [
            {
                code: "white",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.pmg",
            },
        ],
    },
    {
        id: 3,
        name: "Crater",
        price: 200,
        bgcolor: "rgb(228, 228, 81)",
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "white",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 4,
        name: "Air Jordan",
        price: 250,
        bgcolor: "rgb(88, 66, 127)",
        colors: [
            {
                code: "gray",
                img: "./img/jordan.png",
            },
            {
                code: "blue",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 5,
        name: "Hippie",
        price: 220,
        bgcolor: "rgb(111, 179, 202)",
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
]




menuItem.forEach(function(items, index){
    items.addEventListener("click",function(){
        Slider.style.transform = `translateX(${-100 * index}vw)`
    })
})
