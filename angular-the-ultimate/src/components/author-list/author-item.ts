import { Component, Input } from "@angular/core";

import { Author } from "../../models";

@Component({
    selector: "app-author-item",
    templateUrl: "./author-item.html"
})
export class AuthorItemComponent {
    @Input() author: Author;
}
