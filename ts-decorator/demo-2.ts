import { countClass, countProperty, counter } from "./counter";

@countClass("FirstName", "LastName")
class Person {
    @countProperty(true, true)
    public firstName: string;

    @countProperty(false, true)
    public lastName: string
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

@countClass("Make", "Model")
class Car{
    constructor(public make: string, public model: string){
    }

    public showCar(){
        return `I'm a ${this.make} ${this.model}`;
    }
}

let weko = new Person("Wekoslav","Stefanovski");

weko.firstName = "Weko";
if (weko.firstName === "Weko") {
    weko.lastName = "Di Stefano";
}

console.log(weko.getFullName());

let yugo = new Car("Yugo", "Florida");
yugo = new Car("Zastava", "101 comfort");


console.log(counter);

