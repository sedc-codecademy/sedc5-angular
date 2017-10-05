import { Routes } from '@angular/router';
import {
    ComponentsModule,
    WelcomeComponent,
    AdderComponent,
    SubtracterComponent,
    MultiplierComponent,
    InvalidOperationComponent
} from "../components";

export const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent
    },
    {
        path: "add/:first/:second",
        component: AdderComponent
    },
    {
        path: "plus/:first/:second",
        component: AdderComponent
    },
    {
        path: "subtract/:first/:second",
        component: SubtracterComponent
    },
    {
        path: "minus/:first/:second",
        component: SubtracterComponent
    },
    {
        path: "multiply/:first/:second",
        component: MultiplierComponent
    },
    {
        path: "times/:first/:second",
        component: MultiplierComponent

    },
    {
        path: "**",
        component: InvalidOperationComponent
    }
];
