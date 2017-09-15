let calc = function (first, second, op) {
    switch (op) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return Math.floor(first / second);
        default:
            return "error";
    }
}

console.log(calc(2, 3, "+"));

console.log(calc("Wekoslav", [{}, {}], false));