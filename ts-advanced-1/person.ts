export class Person {
  constructor(public firstName: string, public lastName: string) {
    counter++;
    console.log("Person one creating");
    console.log(counter);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export var counter = 0;

export default function square(n: number) {
  return n * n;
}