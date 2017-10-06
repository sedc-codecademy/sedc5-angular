import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  firstValue = 10;
  secondValue = 5;

  firstNumber = 20;
  secondNumber = 2;

  title = 'app';

  getUrl(operation: string) {
    return `/${operation}/${this.firstNumber}/${this.secondNumber}`;
  }

  goto(operation: string) {
    this.router.navigate(this.getRoute(operation));
  }

  getRoute(operation: string) {
    return [operation, this.firstNumber, this.secondNumber];
  }
}
