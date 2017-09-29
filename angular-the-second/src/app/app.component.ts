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
  
}
