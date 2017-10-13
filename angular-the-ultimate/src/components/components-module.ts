import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AuthorListComponent, AuthorItemComponent } from "./author-list";
import { AuthorListService } from "./author-list/author-list-service";
import { DataService } from "../services/data-service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        AuthorListComponent,
        AuthorItemComponent
    ],
    providers: [
        AuthorListService,
        DataService
    ],
    exports: [
        AuthorListComponent,
        AuthorItemComponent
    ]
})
export class ComponentsModule { }
