import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first sedc demo';

  oneFirst = 3;
  oneSecond = 5;
  oneOp = "*";

  twoFirst = 3;
  twoSecond = 6;
  twoOp = "+";

  threeFirst = 9;
  threeSecond = 11;
  threeOp = "invalid";

  names = ["Weko", "Bobo", "Petar", "Dhurata"];

  calcs = [
    { first: 10, second: 20, op: "+"},
    { first: 30, second: 7, op: "*"},
    { first: 40, second: 22, op: "-"},
    { first: 50, second: 10, op: "/"},
  ];

  incOneFirst() {
    this.oneFirst++;
  }

  incOneSecond() {
    this.oneSecond++;
  }

  addName() {
    this.names.push("Granit");
  }

  removeCalc() {
    this.calcs.pop();
  }
}
