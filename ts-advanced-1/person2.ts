export class Person {
    constructor(public name: string, public surname: string) {
        counter++;
        console.log("Person two creating");        
    }

    getFullName(){
      return `${this.surname} ${this.name}`;
    }
}

export var counter = 0;