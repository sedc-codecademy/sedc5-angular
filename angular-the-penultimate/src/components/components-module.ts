import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { DataService } from "../services/data-service";

import { AuthorListComponent } from "./author-list";
import { AuthorListItemComponent } from "./author-list-item";

import { AuthorListService } from "./author-list/author-list-service";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        AuthorListComponent,
        AuthorListItemComponent
    ],
    providers: [
        AuthorListService,
        DataService,
    ],
    exports: [
        AuthorListComponent,
        AuthorListItemComponent
    ]
})
export class ComponentsModule { }
