import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutes } from "./routes";

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ]
})
export class AppRoutingModule { }
