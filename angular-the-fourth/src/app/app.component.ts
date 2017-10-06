import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  first = 10;
  second = 5;

  constructor(private router: Router) {

  }

  getUrl(operation: string) {
    return `${operation}/${this.first}/${this.second}`;
  }

  goto(operation: string) {
    this.router.navigate(this.getRoute(operation));
  }

  getRoute(operation: string) {
    return [operation, this.first, this.second];
  }


}
