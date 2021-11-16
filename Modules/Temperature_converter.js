export function Temperature_converter() {
    const cont = 1

    while (cont === 1) {

        let choose_celsius_or_fahrenheit = (Number(prompt("What would you like to convert?\r" +
            "Press 1 for: Celsius to Fahrenheit\r" +
            "Press 2 for: Fahrenheit to Celsius\r" +
            "Press 3 to exit")));

        if (choose_celsius_or_fahrenheit === 1) {
            let temp_c = Number(prompt("Enter Temperature in Celsius"));
            let temp_f = (temp_c * 9 / 5 + 32).toFixed(2);
            alert("That is " + temp_f + " " + "Degrees Fahrenheit")
        } else if (choose_celsius_or_fahrenheit === 2) {
            let temp_f = Number(prompt("Enter Temperature in Fahrenheit"));
            let temp_c = ((temp_f - 32) * 9 / 5).toFixed(2);
            alert("That is " + temp_c + " " + "Degrees Celsius");
        } else if (choose_celsius_or_fahrenheit === 3) {
            return;
        } else {
            alert("Invalid input")
        }

    }
}