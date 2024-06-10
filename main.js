function operate(string) {
    let numbers = string.split(" ");

    numbers.map((item, index) => {
        if (item.match(/^[0-9]+$/)!= null) {
            numbers[index] = Number(item);
        }
    });

    console.log(numbers); // [ 141, '+', 12, '-', 2 ]

    let total = numbers[0]; // 141

    numbers.splice(0, 1);

    let shortOperation;

    for (let i = 0; i <= 2; i++) {
        shortOperation = numbers.splice(0, 2);

        switch (shortOperation[0]) {
            case "+":
                total += shortOperation[1];
                break;
            case "-":
                total -= shortOperation[1];
                break;
            case "*":
                total *= shortOperation[1];
                break;
            case "/":
                total /= shortOperation[1];
                break;
        }
    }

    return total;
}


const sample = "141 + 12 * 2"

console.log(operate(sample))