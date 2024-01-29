const cursor = document.querySelector("#cursor")
const main = document.querySelector(".main")

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
})

document.querySelector("#overlay1").addEventListener("mousemove",function(dets){
        document.querySelector("#elem1 img").style.scale = 1
        document.querySelector("#elem1 img").style.opacity = 1
        document.querySelector("#elem1 img").style.left = dets.x-7+"px"
        document.querySelector("#elem1 img").style.top = dets.y+"px"
        cursor.style.opacity = 0

    
})

document.querySelector("#overlay1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 0
    cursor.style.opacity = 1
})

document.querySelector("#overlay2").addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 img").style.opacity = 1
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.left = dets.x-7+"px"
    document.querySelector("#elem2 img").style.top = dets.y-300+"px"
    cursor.style.opacity = 0


})

document.querySelector("#overlay2").addEventListener("mouseleave",function(dets){
document.querySelector("#elem2 img").style.scale = 0
document.querySelector("#elem2 img").style.opacity = 0
cursor.style.opacity = 1
})

document.querySelector("#overlay3").addEventListener("mousemove",function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1
    document.querySelector("#elem3 img").style.left = dets.x-7+"px"
    document.querySelector("#elem3 img").style.top = dets.y-400+"px"
    cursor.style.opacity = 0


})

document.querySelector("#overlay3").addEventListener("mouseleave",function(dets){
document.querySelector("#elem3 img").style.scale = 0
document.querySelector("#elem3 img").style.opacity = 0
cursor.style.opacity = 1
})

document.querySelector("#overlay4").addEventListener("mousemove",function(dets){
    document.querySelector("#elem4 img").style.scale = 1
    document.querySelector("#elem4 img").style.opacity = 1
    document.querySelector("#elem4 img").style.left = dets.x-7+"px"
    document.querySelector("#elem4 img").style.top = dets.y-500+"px"
    cursor.style.opacity = 0


})

document.querySelector("#overlay4").addEventListener("mouseleave",function(dets){
document.querySelector("#elem4 img").style.scale = 0
document.querySelector("#elem4 img").style.opacity = 0
cursor.style.opacity = 1
})