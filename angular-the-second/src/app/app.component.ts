import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  oneFirst = 3;
  oneSecond = 11;
  oneOp = "*";

  twoFirst = 2;
  twoSecond = 3;
  twoOp = "+";

  threeFirst = 22;
  threeSecond = 3;
  threeOp = "-";

  fourFirst = 1;
  fourSecond = 2;
  fourOp = "h";

  isRed = true;
  isGreen = false;

  beatles = [
    { firstName: "John", lastName: "Lennon" },
    { firstName: "Ringo", lastName: "Starr" },
    { firstName: "George", lastName: "Harrison" },
    { firstName: "Paul", lastName: "McCartney" },
    { firstName: "Pete", lastName: "Best" },
  ];

  numbers = [10, 14, 65, 73];

  weko = {
    firstName: "wEkOslav",
    lastName: "stefaNOVSKI",
    birthDate: new Date(1977, 6, 16)
  };

  incFirst() {
    this.oneFirst++;
    this.twoFirst++;
  }

  incSecond() {
    this.oneSecond++;
    this.threeSecond++;
  }

  toggleRed() {
    this.isRed = !this.isRed;
  }

  toggleGreen() {
    this.isGreen = !this.isGreen;
  }

  getClasses() {
    return {
      "crveno": this.isRed,
      "zeleno": this.isGreen
    };
  }

}
