import { Component, OnInit } from "@angular/core";

import { Author } from "../../models";

import { AuthorListService } from "./author-list-service";

@Component({
    selector: "app-authors",
    templateUrl: "author-list.html"
})
export class AuthorListComponent implements OnInit {
    authors: Author[] = [];
    total: string;

    constructor(private service: AuthorListService) {

    }

    async ngOnInit() {
        console.log("before await");
        this.authors = await this.service.getAllAuthors();
        console.log("after await");
        this.total = `Total authors: ${this.authors.length}`;
        console.log("after total");
    }
}
