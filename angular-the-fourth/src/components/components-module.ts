import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AdderComponent } from "./adder";
import { SubtracterComponent } from "./subtracter";
import { InvalidOperationComponent } from "./invalid-operation";
import { WelcomeComponent } from "./welcome";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AdderComponent,
        SubtracterComponent,
        InvalidOperationComponent,
        WelcomeComponent
    ],
    exports: [
        AdderComponent,
        SubtracterComponent,
        InvalidOperationComponent,
        WelcomeComponent
    ]
})
export class ComponentsModule { }
