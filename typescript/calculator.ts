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
            return "whatever";
    }
}

console.log(calc(3, 5, "+"));

console.log(calc("wekoslav", [{},{}], 7));