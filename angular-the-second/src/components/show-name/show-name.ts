import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-show-name",
    templateUrl: "./show-name.html"
})
export class ShowNameComponent implements OnInit {
    @Input() firstName: string;

    @Input() lastName: string;

    @Input() birthDate: Date;

    fullName: string;

    ngOnInit() {
        this.fullName = `${this.lastName}, ${this.firstName}`;
    }
}
