import * as Improved from "./person-2";
import * as Original from "./person";
import kvadrat from './person';

var weko = new Original.Person("Wekoslav", "Stefanovski");
console.log(weko.getFullName());

var weko2 = new Improved.Person("Wekoslav", "Stefanovski");
console.log(weko2.getFullName());


console.log("-----------");
console.log(Original.count);
console.log(Improved.count);
