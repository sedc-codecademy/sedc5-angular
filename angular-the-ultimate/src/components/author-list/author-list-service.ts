import { Injectable } from "@angular/core";

import { Author, Authors, Novel } from "../../models";
import { DataService } from "../../services/data-service";


import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthorListService {
    constructor(private service: DataService) {
    }

    async getAllAuthors(): Promise<Authors> {

        const authors = await this.service.getAllAuthors();
        const novels = await this.service.getAllNovels();
        authors.forEach(a => {
            a.novelCount = novels.filter(n => n.authorId === a.id).length;
        });
        return authors;
    }

    sortAuthors(authors: Authors, selector: (a: Author) => number) {
        const result = authors.slice();
        result.sort((a, b) => {
            const first = selector(a);
            const second = selector(b);
            return first - second;
        });
        return result;
    }
}
