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


// Selecting Elements from 1st PAGE
const shoeDisplayName = document.querySelector(".shoes .name")
const ShoePrice = document.querySelector(".shoes .price")
const ShoeBackground = document.querySelector(".shoes .shoebg")

//Selecting the default Product
let currentProduct = products[0]

// Selecting Elements from products PAGE
const currentProductImg = document.querySelector(".productImage") 
const currentProductName = document.querySelector(".productName")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".sizes")


menuItem.forEach(function(items, index){
    items.addEventListener("click",function(){
        Slider.style.transform = `translateX(${-100 * index}vw)`

        //Changing Images in Products Section
        currentProduct = products[index]

        currentProductImg.src = currentProduct.colors[0].img

        //Changing Name of the Product
        shoeDisplayName.textContent = currentProduct.name
        currentProductName.textContent = currentProduct.name

        //Changing price of the Product
        ShoePrice.textContent = "$" + currentProduct.price
        currentProductPrice.textContent = "$" + currentProduct.price

        //Changing Colors in Product
        ShoeBackground.style.backgroundColor = currentProduct.bgcolor
        currentProductColors.forEach(function(color,index){
            color.style.backgroundColor = currentProduct.colors[index].code
        })
    })
})


//Changing images of Product when Colors are clicked
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", function () {
        currentProductImg.src = currentProduct.colors[index].img
    })
})
currentProductSizes.forEach(function(size){
    size.addEventListener("click",function(){
        currentProductSizes.forEach(function(size){
            size.style.backgroundColor = "transparent"
            size.style.color = "white"
        })
        size.style.color = "yellow"
        size.style.backgroundColor = "red"
    })
})
