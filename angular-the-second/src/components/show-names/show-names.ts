import { Component, Input } from "@angular/core";

export interface Person {
    firstName: string;
    lastName: string;
    birthDate?: Date;
}

@Component({
    selector: "app-show-names",
    templateUrl: "./show-names.html"
})
export class ShowNamesComponent {
    @Input() people: Person[];
}
