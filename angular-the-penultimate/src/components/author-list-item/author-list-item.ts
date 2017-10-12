import { Input, Component } from "@angular/core";

import { Author } from "../../models";

@Component({
    selector: "app-author-item",
    templateUrl: "author-list-item.html"
})
export class AuthorListItemComponent {
    @Input() author: Author;
}
