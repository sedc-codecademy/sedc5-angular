type operator = "+" | "-" | "*" | "/";

let calc = function (first: number, second: number, op:operator) {
    switch (op) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return Math.floor(first / second);
    }
}

console.log(calc(3, 5, "+"));

console.log(calc(0x28, 12, "+"));

console.log(calc(0x28, 12, "+"));


console.log(calc(1, 2, "+") + 4);