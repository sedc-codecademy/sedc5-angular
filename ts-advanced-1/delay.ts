const strings = ["one", "two", "three", "four"];

// for (let index = 0; index < strings.length; index++) {
//     setTimeout(function() {
//         console.log(strings[index])
//     }, index*1000);
// }

function setTimeouts() {
    console.log("one");

    setTimeout(function () {
        console.log("two");
        setTimeout(function () {
            setTimeout(function () {
                console.log("four");
            }, 1000);
            console.log("three");
        }, 1000);
    }, 1000);
}

let delay = function (timeout: number = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, timeout);
    });
}

function promises() {
    console.log("one");

    delay().then(() => {
        console.log("two");
        return delay();
    }).then(() => {
        console.log("three");
        return delay();
    }).then(() => {
        console.log("four");
        return delay();
    }).then(() => {
        console.log("five");
    });
    console.log("I've returned");
}

// promises();
// console.log("After call");

async function asyncs() {
    console.log("one");
    await delay();
    console.log("two");
    await delay();
    console.log("three");
    await delay();
    console.log("four");
    await delay();
    console.log("five");

    console.log("I've returned");
}

// asyncs();
// console.log("After call");

async function asyncsFor() {
    const strings = ["one", "two", "three", "four", "five"];
    for (let index = 0; index < strings.length; index++) {
        await delay();
        console.log(strings[index]);
    }

    console.log("I've returned");
}

asyncsFor();
console.log("After call");