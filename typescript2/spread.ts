Math.max(1, 2, 3, 4);

let nums = [1, 5, 3, 7, 1, 2];

let max = Math.max(...nums);
console.log(max);

let numsnums = [...nums, 100, ...nums];
let fbnums = [-100, ...nums, 100];

let [head, ...tail] = nums;
console.log(head);
console.log(tail);

let weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski"
}

let wekoAged = {
    ...weko,
    age: 0x28,
};
console.log(wekoAged);

let {firstName, ...lastName} = wekoAged;
console.log(firstName);
console.log(lastName);
