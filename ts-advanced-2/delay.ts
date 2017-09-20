// console.log("one");
// wait(1000);
// console.log("two");
// wait(1000);
// console.log("three");
// wait(1000);
// console.log("four");
// wait(1000);
// console.log("five");

// function usingSetTimeout() {
//     console.log("one");
//     setTimeout(function () {
//         setTimeout(function () {
//             setTimeout(function () {
//                 setTimeout(function () {
//                     console.log("five");
//                 }, 1000);
//                 console.log("four");
//             }, 1000);
//             console.log("three");
//         }, 1000);
//         console.log("two");
//     }, 1000);
//     console.log("Before finish");
// }

// usingSetTimeout();
// console.log("After finish");


let delay = function (timeout: number = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, timeout);
    });
}

// function usingPromises(){
//     console.log("one");
//     delay().then(()=>{
//         console.log("two");
//         return delay();
//     }).then(()=>{
//         console.log("three");
//         return delay();
//     }).then(()=>{
//         console.log("four");
//         return delay();
//     }).then(()=>{
//         console.log("five");
//     });

//     console.log("Before finish");
// }

// usingPromises();
// console.log("After finish");

async function usingAsync() {
    console.log("one");
    await delay();
    console.log("two");
    await delay();
    console.log("three");
    await delay();
    console.log("four");
    await delay();
    console.log("five");

    console.log("Before finish");
}

usingAsync();
console.log("After finish");