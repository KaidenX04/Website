function Calculator() {

    let a = Number(document.getElementById("firstNumberInput").value);
    let b = String(document.getElementById("operatorNumberInput").value);
    let c = Number(document.getElementById("secondNumberInput").value);

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
}






