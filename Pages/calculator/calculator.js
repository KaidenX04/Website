function Calculator() {
    const cont = 1

    while (cont === 1) {

        let exit_or_stay = (Number(prompt("Press 1 to Calculate\r" +
            "Press 2 to exit")));

        if (exit_or_stay === 1) {

            let a = (Number(prompt("Input First Number")));
            let b = prompt("Input Operator");

            if (b === "+" || "-" || "x" || "X" || "*" || "/") {

                let c = (Number(prompt("Input Second Number")));

                if (b === "+") {
                    let answer = (a + c);
                    alert(answer)
                } else if (b === "-") {
                    let answer = (a - c);
                    alert(answer)
                } else if (b === "/" || "div" || "Div") {
                    let answer = (a / c);
                    alert(answer)
                } else if (b === "x" || "*" || "X") {
                    let answer = (a * c);
                    alert(answer)
                } else {
                    alert("Invalid input")
                }
            } else {
                alert("Invalid operator")
            }
        } else if (exit_or_stay === 2) {
            return
        } else {
            alert("Invalid input")
        }

    }
}