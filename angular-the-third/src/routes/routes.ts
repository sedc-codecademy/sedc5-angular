import { Routes } from '@angular/router';
import {
    ComponentsModule,
    AdderComponent,
    SubtracterComponent,
    InvalidOperationComponent
} from "../components";

export const routes: Routes = [{
    path: "add",
    component: AdderComponent
}, {
    path: "subtract",
    component: SubtracterComponent
}, {
    path: "**",
    component: InvalidOperationComponent

}];
