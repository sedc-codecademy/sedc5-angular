import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AdderComponent } from "./adder";
import { SubtracterComponent } from "./subtracter";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AdderComponent,
        SubtracterComponent
    ],
    exports: [
        AdderComponent,
        SubtracterComponent
    ]
})
export class ComponentsModule { }
