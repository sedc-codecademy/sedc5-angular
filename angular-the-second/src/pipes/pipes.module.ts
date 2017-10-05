import { NgModule } from '@angular/core';

import { TitleCasePipe } from "./title-case-pipe";

@NgModule({
  declarations: [
    TitleCasePipe
  ],
  exports: [
    TitleCasePipe
  ],
  providers: []
})
export class PipesModule { }