let value = 0
let valueOut = document.getElementById("value");
let addButton = document.getElementById("Add");
let subButton = document.getElementById("Subtract");
let resetButton = document.getElementById("reset");

addButton.addEventListener("click", () => {
    value ++
    valueOut.innerHTML = value
});

subButton.addEventListener("click", () => {
    value --
    valueOut.innerHTML = value
});

resetButton.addEventListener("click", () => {
    value = 0
    valueOut.innerHTML = value
})



