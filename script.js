gsap.to("#backgrnd",{
    top:"0%",
    // opacity:1,
    // backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:".backgrnd",
        scroller:"body",
        start:"top -10%",
        end:"top -9%",
        scrub:true
        // markers:true
    }
})

































// var cursorblur = document.querySelector("#cursor-blur")
var cursor = document.querySelector("#cursor")
var nav = document.querySelector(".navbar")
var chat = document.getElementById("chat")
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";

})
chat.addEventListener("mouseenter",function(){
    cursor.style.scale = 3
    cursor.style.transition = "all 0.2s ease-in-out"
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"
})

chat.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
    cursor.style.border = "0px solid #fff"
    cursor.style.transition = "all 0s ease-in-out"
    cursor.style.backgroundColor = "#FFE733"
    cursor.style.zIndex = "99999"
    
})


var h4all = document.querySelectorAll(".navbar ul li a")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.transition = "all 0.2s ease-in-out"
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
})
h4all.forEach(function (elem) {
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #fff"
        cursor.style.transition = "all 0s ease-in-out"
        cursor.style.backgroundColor = "#FFE733"
    })
})


var hamnav = document.getElementById("ham-nav")
var hambur = document.getElementById("ham-bur")
var hambuger = document.getElementById("ham-buger")


hambur.addEventListener('click',()=>{
    hamnav.style.top = "-100vh"
    console.log("hello")
})
hambuger.addEventListener('click',()=>{
    hamnav.style.top = "0vh"
    console.log("hello")
})