// 1. angular imports
import { NgModule } from '@angular/core';
// 2. third party libraries (stuff from node_modules)
/* EMPTY */
// 3. other modules from the same application
/* EMPTY */
// 4. Parts of the module itself
import { CalculatorComponent } from "./calculator";

@NgModule({
    declarations: [
        CalculatorComponent
    ],
    exports: [
        CalculatorComponent
    ],
    imports: [],
    providers: [],
})
export class ComponentsModule { }
