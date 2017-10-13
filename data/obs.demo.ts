let numbers = [1, 4, 6, 3, 5];
function process(n) {
    // ...
}
numbers.forEach(n => process(n))

let numberAfter = function(timeout, number){
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            return resolve(number);
        }, timeout);
    })
}


// console.log(3);
// numberAfter(1000, 4).then(n => console.log(n));
// numberAfter(2000, 5).then(n => {
//     console.log(n)
//     numberAfter(1000, 6).then(n => console.log(n));
// });


const printer = async () => {
    console.log(3);
    console.log(await numberAfter(1000, 4));
    console.log(await numberAfter(1000, 5));
    console.log(await numberAfter(1000, 6));
}

printer();
