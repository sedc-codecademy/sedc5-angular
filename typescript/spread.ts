console.log(Math.max(1, 2));

console.log(Math.max(1, 2, 3));

let nums = [1, 2, 17, 4, 5];

// old way
console.log(Math.max.apply(null, nums));
// new way
console.log(Math.max(...nums));

let newNums = [0, ...nums, 0];
console.log(newNums);

newNums = [...nums, ...nums];
console.log(newNums);

let [head, ...tail] = nums;
console.log(head);
console.log(tail);

let weko = { firstName: "Wekoslav", lastName: "Stefanovski"};

let {firstName, ...rest} = weko;
console.log(firstName);
console.log(rest)

let oldweko = Object.assign({}, weko, {age: 0x28});
console.log(oldweko);

let newWeko = {
    ...weko,
    age: 0x28
}
console.log(newWeko);