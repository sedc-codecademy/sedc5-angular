import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CalculatorComponent } from './calculator';
import { PersonComponent } from './person';

@NgModule({
  declarations: [
    CalculatorComponent,
    PersonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent,
    PersonComponent
  ],
  providers: [],
})
export class ComponentModule { }
