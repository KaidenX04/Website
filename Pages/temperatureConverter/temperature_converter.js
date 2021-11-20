function celsiusConverter() {
    let temp_c = (document.getElementById("celsiusInput").value);
    let temp_f = (temp_c * 9 / 5 + 32).toFixed(2);
    alert("That is " + temp_f + " " + "Degrees Fahrenheit");
}

function fahrenheitConverter() {
    let temp_f = (document.getElementById("fahrenheitInput").value);
    let temp_c = ((temp_f - 32) * 9 / 5).toFixed(2);
    alert("That is " + temp_c + " " + "Degrees Celsius");
}

