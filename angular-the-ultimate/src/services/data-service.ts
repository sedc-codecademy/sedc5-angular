import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Author, Authors, Novel } from "../models";

import "rxjs/add/operator/toPromise";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    async getAllAuthors() {
        const authors = await this.http.get<Authors>("http://localhost:3000/authors").toPromise();
        return authors;
    }

    async getAllNovels() {
        const novels = await this.http.get<Novel[]>("http://localhost:3000/novels").toPromise();
        return novels;
    }
}
