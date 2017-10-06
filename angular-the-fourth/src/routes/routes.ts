import { Routes } from "@angular/router";

import { AdderComponent, SubtracterComponent } from "../components";

export const AppRoutes: Routes = [{
    path: "add/:first/:second",
    component: AdderComponent
}, {
    path: "plus/:first/:second",
    component: AdderComponent
}, {
    path: "subtract/:first/:second",
    component: SubtracterComponent
}, {
    path: "minus/:first/:second",
    component: SubtracterComponent
}, {
    path: "**",
    component: InvalidOperationComponent
}];

