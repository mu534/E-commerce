const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id:1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code:"black",
                img: "img/airforce.png",
            },
            {
                code: "darkblue",
                img: "img/airForce2.png",
            },
        ],
    },
    {
        id: 2,
        title: "JORDAN",
        price: 149,
        colors: [
            {
                code: "red",
                img: "img/jordan.png",
            },
            {
                code: "green",
                img: "img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
             {
                code: "green",
                img: "img/blazer2.png",
             },
             {


                code: "lightgray",
                img: "img/blazer.png",
               
             },
        ],
    },
    {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
         {
            code: "black",
            img: "img/crater2.png",
         },
         {
            code: "lightgray",
            img: "img/CRATER.png ",
         },
    ],
},
{
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
         {
            code: "lightgray",
            img: "img/hippie2.png",
         },
         {
            code: "black",
            img: "img/hippie.png ",
           
         },
    ],
},

]


let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productionImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        console.log("Clicked item:", index); // Debugging to ensure it registers clicks
        wrapper.style.transform = `translateX(${-100 * index}vw)`; // Moves slider based on clicked menu item


        //change the choosen product
        choosenProduct = products[index]


        //change texts of currentproducts
        currentProductTitle.textContent =choosenProduct.title
        currentProductPrice.textContent = "$" +choosenProduct.price
        currentProductImg.src =choosenProduct.colors[0].img

        // changing color for each products
        currentProductColors.forEach((color, index) => {
           color.style.backgroundColor = choosenProduct.colors[index].code; 
        });
    });
});
currentProductColors.forEach((color, index) =>{
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () =>{
        currentProductSizes.forEach((size, index) => {
            size.style.backgroundColor = "white"
            size.style.color ="black"
        });
        size.style.backgroundColor = "black"
        size.style.color ="white"
    });
});
const productbutton = document.querySelector(".productionButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close"); 
productbutton.addEventListener("click", () => {
    payment.style.display ="flex";
});
close.addEventListener("click", () => {
    payment.style.display ="none";
})