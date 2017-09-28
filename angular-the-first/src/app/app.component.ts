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
    { first: 10, second: 20, op: "+" },
    { first: 30, second: 7, op: "*" },
    { first: 40, second: 22, op: "-" },
    { first: 50, second: 10, op: "/" },
  ];

  isRed = true;
  isGreen = false;

  weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    birthDate: new Date(1977, 6, 16)
  };

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

  toggleRed() {
    this.isRed = !this.isRed;
  }

  toggleGreen() {
    this.isGreen = !this.isGreen;
  }

  getClassValues() {
    return {
      red: this.isRed,
      green: this.isGreen,
      yellow: true
    };
  }
}
