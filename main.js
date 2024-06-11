// The following function returns the evaluation of a string.
// operate(1 + 2 * 3) Would return 9, it follows a left-to-right process.
function operate(string) {
    let numbers = string.split(" ")

    numbers.map((item, index) => {
        if (item.match(/^[0-9]+$/)!= null) {
            numbers[index] = Number(item)
        }
    })

    let total = numbers[0]

    numbers.splice(0, 1)

    let shortOperation

    for (let i = 0; i <= 2; i++) {
        shortOperation = numbers.splice(0, 2)

        switch (shortOperation[0]) {
            case "+":
                total += shortOperation[1]
                break;
            case "-":
                total -= shortOperation[1]
                break;
            case "*":
                total *= shortOperation[1]
                break;
            case "/":
                total /= shortOperation[1]
                break
        }
    }

    return total
}

let operation = ""

const sample = "141 + 12 * 2"

operate(sample)

const container = document.querySelector(".container")
const typeBox = container.querySelector(".input")
const row = container.querySelector("button")

container.addEventListener("click", (event) => {
    let target = event.target

    switch(target.className) {
        case "num":
            let number = target.id.substring(1)
            operation += number
            break
        case "operator":
            switch(target.id) {
                case "add":
                    operation += " + "
                    break
                case "subtract":
                    operation += " - "
                    break
                case "multiply":
                    operation += " * "
                    break
                case "divide":
                    operation += " / "
                    break
            }
            break
        case "equal":
            operation = operate(operation)
    }

    typeBox.textContent = operation

    console.log(operation)

    if(operation != "") {
        typeBox.removeAttribute("style", "color: #666;")
        typeBox.setAttribute("style", "color: whitesmoke;")
        
    }
    
})

document.querySelector("#clear").addEventListener("click", () => {
    console.log("reset")
    operation = ""
    typeBox.textContent = "Input a calculation"
    console.log("Ok, you clicked reset!")
    typeBox.setAttribute("style", "color: #666; font-size: 20px; padding: 23px;")
})

if(operation == "") {
    typeBox.textContent = "Input a calculation"
    typeBox.setAttribute("style", "color: #666; font-size: 20px; padding: 23px;")
}