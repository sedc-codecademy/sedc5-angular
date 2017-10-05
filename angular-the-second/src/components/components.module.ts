// 1. angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 2. third party libraries (stuff from node_modules)
/* EMPTY */
// 3. other modules from the same application
import { PipesModule } from "../pipes";

// 4. Parts of the module itself
import { CalculatorComponent } from "./calculator";
import { ShowNameComponent } from "./show-name";
import { ShowNamesComponent } from "./show-names";

@NgModule({
    declarations: [
        CalculatorComponent,
        ShowNameComponent,
        ShowNamesComponent
    ],
    exports: [
        CalculatorComponent,
        ShowNameComponent,
        ShowNamesComponent
    ],
    imports: [CommonModule, PipesModule],
    providers: [],
})
export class ComponentsModule { }
