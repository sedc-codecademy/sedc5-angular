import { countClass, countProperty, counter } from "./counter";

@countClass("FirstName", "LastName")
class Person {
    @countProperty(true, true)
    public firstName: string;

    @countProperty(false, true)
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

@countClass()
class Car {
    constructor(public make: string, public model: string) {
    }

    getCarDisplay() {
        return `${this.make} ${this.model}`;
    }
}

const weko = new Person('Wekoslav', 'Stefanovski');
console.log(weko.getFullName());

weko.firstName = "Weko";
if (weko.firstName === "Weko"){
    weko.lastName = "Di Stefano";
}

const yugo = new Car("Yugo", "45");
console.log(yugo.getCarDisplay());

console.log(counter);


