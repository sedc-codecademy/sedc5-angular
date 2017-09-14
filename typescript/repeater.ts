// make a function that will repeat a given string a given number of times
// e.g. repeat("Weko", 3) should return "WekoWekoWeko"

let repeat = function (text: string, count: number) {
    let result = "";
    for (let index = 0; index < count; index++)
        result += text;
    return result;
}