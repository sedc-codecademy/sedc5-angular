export class Person{
    constructor(public name: string, public surname: string){
        count++;
        console.log(`Improved ${count}`)

    }

    public getFullName() {
        return `${this.surname}, ${this.name}`
    }
}

export let count = 0;