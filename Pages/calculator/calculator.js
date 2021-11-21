function Calculator() {

    let a = Number(document.getElementById("firstNumber").value);
    let b = String(document.getElementById("operator").value);
    let c = Number(document.getElementById("secondNumber").value);

    switch(b)
    {
        case"+": {
            let answer = (a + c);
            alert(answer)
            break
        }
        case"-": {
            let answer = (a - c);
            alert(answer)
            break
        }
        case "/":  case"div":  case"Div": {
            let answer = (a / c);
            alert(answer)
            break
        }
        case "x": case "*": case "X": {
            let answer = (a * c);
            alert(answer)
            break
        }

        default: {
            alert("invalid Operator")
            break
        }
    }
    location = location
}






