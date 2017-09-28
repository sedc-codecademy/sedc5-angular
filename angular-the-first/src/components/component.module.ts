import { NgModule } from '@angular/core';

import { CalculatorComponent } from './calculator';

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [],
})
export class ComponentModule { }
