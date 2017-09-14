class Person {
    constructor(public firstName: string, public lastName: string){
    }

    public getFullName = () => `${this.value} ${this.firstName} ${this.lastName}`;

    private value = "Hi";
}

let weko = new Person("Wekoslav", "Stefanovski");
console.log(weko.getFullName());
