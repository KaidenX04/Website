let output = document.getElementById("text")
let start = document.getElementById("start")
let clear = document.getElementById("clear")
let miliseconds = 00
let seconds = 00
let minutes = 00
let click = 1
let counterHandle = null;
output.innerHTML = (minutes + ":" + seconds + ":" + miliseconds)

start.addEventListener("click", () => {
    
    if (click === 1) { 
        click = 0
        console.log("Click is currently 1")
        start.innerHTML = "Stop"
        counterHandle = (setInterval( () => {
            miliseconds ++ 
            if (miliseconds === 100){
                miliseconds = 0
                seconds = seconds + 1
            }
                if (seconds === 60){
                    seconds = 0
                    minutes = minutes + 1
                }
                    if (minutes === 60){
                        clearInterval(counterHandle)
                        output.innerHTML = ("Maximum of 1 hour reached")
                    }
                

            output.innerHTML = (minutes + ":" + seconds + ":" + miliseconds)
        }
        ,10))
        console.log("start")
    }    
    else {
        click = 1
        clearInterval(counterHandle)
        start.innerHTML = ("Start")
        console.log("stop")
        console.log("Click is currently 0")
        console.log(click)
        }
    
});

clear.addEventListener("click", () => {
    miliseconds = 0
    seconds = 0
    minutes = 0
    output.innerHTML = (minutes + ":" + seconds + ":" + miliseconds)
})





