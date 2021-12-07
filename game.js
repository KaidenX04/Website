let character = document.getElementById("character")
let block = document.getElementById("block")
let outputPoints = document.getElementById("points")
let points = 0
let animationDuration = 2
let levelOut = document.getElementById("level")
let level = 1
let background = document.getElementById("camera")
let page = document.getElementById("page")

block.classList.add("moving")
background.classList.add("startGame")


window.addEventListener("keydown",(e)=>{
    if (! character.classList.contains("jump") ){
        character.classList.add("jump")
    }
    setTimeout(()=>{
        character.classList.remove("jump")
    },500)
    

})

block.addEventListener("animationiteration", ()=>{
    points = points + 1
    outputPoints.innerHTML = ("Points: "+ points)
    if (points % 10 == 0){
        levelOut.classList.add("colorChange")


        block.classList.remove("moving")
        setTimeout(()=>{
            block.classList.add("moving")
            levelOut.classList.remove("colorChange")
        }, 1500)

        level = level + 1
        if (points < 70){
            animationDuration = animationDuration - 0.2
            block.style.animationDuration = (animationDuration+"s")
            console.log(block.style.animationDuration)
            
        }
        levelOut.innerHTML = ("Level: "+ level)
    }
    if (points === 50){
        background.classList.remove("startGame")
        background.classList.add("midGame")
    }
    if (points === 70){
        background.classList.remove("midGame")
        background.classList.add("endGame1")
    }
    if (points === 80){
        background.classList.remove("endGame1")
        background.classList.add("endGame2")
        page.classList.add("backEndGame2")
    }
    if (points === 90){
        background.classList.remove("endGame2")
        background.classList.add("endGame3")
        page.classList.remove("backEndGame2")
        page.classList.add("backEndGame3")
    }
    if (points === 100){
        page.classList.remove("backEndGame3")
        page.classList.add("backEndGame4")
        animationDuration = animationDuration - 0.1
        block.style.animationDuration = (animationDuration+"s")
        console.log(block.style.animationDuration)
    }
    
})

setInterval(() => {
    let blockPos = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let characterPos = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if (blockPos < 70 && blockPos > 50 && characterPos > 130){
        console.log("hit")
        alert("game over!")
        points = 0
        location.reload()
    }
}, .001);

