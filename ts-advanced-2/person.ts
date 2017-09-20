export class Person {
    constructor(public firstName: string, public lastName: string) {
        count++;
        console.log(`Original ${count}`)
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

export let count = 0;

export default function square(x) {
    return x * x;
}