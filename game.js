let character = document.getElementById("character")
let block = document.getElementById("block")
let outputPoints = document.getElementById("points")
let points = 0
let animationDuration = 2
let levelOut = document.getElementById("level")
let level = 1
let background = document.getElementById("camera")
let page = document.getElementById("page")
let highScoreOut = document.getElementById("highScore")
let highScore = 0
let scores = []
let hit = 0
let startScreen = document.getElementById("startGame")
let highScoreStart = document.getElementById("highScoreStart")
let gameOver = document.getElementById("gameOver")
let on = 0

startScreen.classList.add("gameOver")
gameOver.classList.add("hidden")
background.classList.add("startGame")

window.addEventListener("keyup",()=>{
    gameOver.classList.add("hidden")
    startScreen.classList.add("hidden")
    block.classList.add("moving")
    outputPoints.innerHTML = ("Points: "+ points)
    highScore.innerHTML = ("High Score: "+ highScore)
    levelOut.innerHTML = ("Level: "+ level)
    block.classList.remove("hidden")
    character.classList.remove("hidden")
    background.classList.remove("hidden")
    on = 1
})

window.addEventListener("touchstart",()=>{
    gameOver.classList.add("hidden")
    startScreen.classList.add("hidden")
    block.classList.add("moving")
    outputPoints.innerHTML = ("Points: "+ points)
    highScore.innerHTML = ("High Score: "+ highScore)
    levelOut.innerHTML = ("Level: "+ level)
    block.classList.remove("hidden")
    character.classList.remove("hidden")
    background.classList.remove("hidden")
    on = 1
})

window.addEventListener("keydown",(e)=>{
    if (on === 1){
        if (! character.classList.contains("jump") ){
            character.classList.add("jump")
        }
        setTimeout(()=>{
            character.classList.remove("jump")
        },300)   
    }   
})

window.addEventListener("touchstart",(e)=>{
    if (on === 1){
        if (! character.classList.contains("jump") ){
            character.classList.add("jump")
        }
        setTimeout(()=>{
            character.classList.remove("jump")
        },300)   
    }   
})

block.addEventListener("animationiteration", ()=>{
    if (hit === 0){
        points ++
        outputPoints.innerHTML = ("Points: "+ points)
        if (points % 10 == 0){
            levelOut.classList.add("colorChange")
            block.classList.remove("moving")
            setTimeout(()=>{
                block.classList.add("moving")
                levelOut.classList.remove("colorChange")
            }, 1500)
            level = level + 1
            if (points < 20){
                animationDuration = animationDuration - 0.5
                block.style.animationDuration = (animationDuration+"s")
                console.log(animationDuration)
            }
            if (points > 10 && points < 100 && animationDuration > 0.52){
                animationDuration = animationDuration - 0.2
                block.style.animationDuration = (animationDuration+"s")
                console.log(animationDuration)
            }
            levelOut.innerHTML = ("Level: "+ level)
        }
        if (points === 20){
            background.classList.remove("startGame")
            background.classList.add("midGame")
        }
        if (points === 40){
            background.classList.remove("midGame")
            background.classList.add("endGame1")
            character.style.animationDuration = ("0.6s")
        }
        if (points === 50){
            background.classList.remove("endGame1")
            background.classList.add("endGame2")
            page.classList.add("backEndGame2")
        }
        if (points === 60){
            background.classList.remove("endGame2")
            background.classList.add("endGame3")
            page.classList.remove("backEndGame2")
            page.classList.add("backEndGame3")
        }
        if (points === 70){
            page.classList.remove("backEndGame3")
            page.classList.add("backEndGame4")
        }
        if (points === 80){
            page.classList.remove("backEndGame4")
            page.classList.add("backEndGame5")
            background.classList.remove("EndGame3")
            background.classList.add("EndGame5")
        }
    }
    if (hit === 1){
        block.classList.add("hidden")
        character.classList.add("hidden")
        level = 1
        scores.push(points) 
        points = 0
        console.log(scores)
        outputPoints.innerHTML = ("")
        highScoreOut.innerHTML = ("")
        levelOut.innerHTML = ("")
        for (i = 0; i < scores.length; i++){
            if(scores[i] > highScore){
                highScore = scores[i]
            }
        }
        console.log(highScore)
        page.removeAttribute("class")
        gameOver.classList.remove("hidden")
        startScreen.classList.remove("hidden")
        background.removeAttribute("class")
        background.classList.add("startGame")
        background.classList.add("hidden")
        startScreen.classList.add("gameOver")
        highScoreStart.innerHTML = ("High Score: "+highScore)
        animationDuration = 2
        block.style.animationDuration = (animationDuration+"s")
        hit = 0
    }
})


function hitDetect(timestamp){
    characterWidth = character.offsetWidth
    characterHeight = character.offsetHeight
    characterX = character.offsetLeft
    characterY = character.offsetTop

    blockWidth = block.offsetWidth
    blockHeight = block.offsetHeight
    blockX = block.offsetLeft
    blockY = block.offsetTop

    if((characterX+characterWidth) > blockX && characterX < (blockX+blockWidth) && (characterY+characterHeight) > blockY && characterY < (blockY+blockHeight)){
        console.log("hit")
        hit = 1
    }
    window.requestAnimationFrame(hitDetect)
}
window.requestAnimationFrame(hitDetect)



