let calc = function (first:number, second: number, op: string) {
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

console.log(calc(0x28, 12, "false"));