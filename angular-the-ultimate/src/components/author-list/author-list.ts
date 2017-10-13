import { Component, OnInit } from "@angular/core";

import { AuthorListService } from "./author-list-service";

import { Authors, Novel } from "../../models";

@Component({
    selector: "app-author-list",
    templateUrl: "./author-list.html"
})
export class AuthorListComponent implements OnInit {
    authors: Authors;

    constructor(private service: AuthorListService) {
    }

    async ngOnInit() {
        console.log("before await");
        this.authors = await this.service.getAllAuthors();
        console.log("after await");
        this.authors = this.service.sortAuthors(this.authors, a => -a.novelCount);
    }

}
