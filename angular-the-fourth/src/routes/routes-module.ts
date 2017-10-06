import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutes } from "./routes";

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: true})
    ]
})
export class AppRoutingModule { }
