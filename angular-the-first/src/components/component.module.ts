import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CalculatorComponent } from './calculator';

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [],
})
export class ComponentModule { }
