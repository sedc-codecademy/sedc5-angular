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
}
