import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-person",
    templateUrl: "person.html",
})
export class PersonComponent {
    @Input() firstName: string;

    @Input() lastName: string;

    @Input() birthDate: Date;

    get fullName() {
        return `${this.firstName} ${this.lastName} `;
    }

}
