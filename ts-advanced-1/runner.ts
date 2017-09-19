// import { Person as PersonOne, counter as counterOne } from "./person";
// import { Person as PersonTwo, counter as counterTwo } from "./person2";

// var weko = new PersonOne("Wekoslav","Stefanovski");

// console.log(weko.getFullName());
// console.log(counterOne);
// console.log(counterTwo);

// console.log("-----------")
// var weko2 = new PersonTwo("Wekoslav","Stefanovski");
// console.log(weko2.getFullName());
// console.log(counterOne);
// console.log(counterTwo);

import * as FirstLib from "./person";
import * as SecondLib from "./person2";

var weko = new FirstLib.Person("Wekoslav","Stefanovski");

console.log(weko.getFullName());
console.log(FirstLib.counter);
console.log(SecondLib.counter);

console.log("-----------")
var weko2 = new SecondLib.Person("Wekoslav","Stefanovski");
console.log(weko2.getFullName());
console.log(FirstLib.counter);
console.log(SecondLib.counter);
