type operator = "+" | "-" | "*" | "/";

enum Operator {
    Plus,
    Minus,
    Times,
    Divide
}

let calc = function (first:number, second: number, op: operator) {
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

console.log(calc(2, 3, "+"));

console.log(calc(0x28, 12, "+"));