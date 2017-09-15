class Person{

    constructor(
        public firstName: string, 
        public lastName: string){}

    public getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
}

var weko = new Person("Wekoslav", "Stefanovski");
console.log(weko.getFullName());