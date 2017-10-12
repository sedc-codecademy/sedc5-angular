import { Injectable } from "@angular/core";
import { Author } from "../../models";

import { DataService } from "../../services/data-service";

@Injectable()
export class AuthorListService {

    constructor(private service: DataService) {

    }

    getAllAuthors(): Promise<Author[]> {
        return this.service.getAllAuthors();
    }

    getAuthorsByName(nameFragment: string): Author[] {
        return [];
    }
}
