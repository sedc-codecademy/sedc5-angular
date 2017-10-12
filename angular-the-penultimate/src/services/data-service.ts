import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

import { Author } from "../models";


@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }

    getAllAuthors() {
        return this.http.get<Author[]>("http://localhost:3000/authors").toPromise();
    }
}
