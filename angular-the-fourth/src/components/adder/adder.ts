import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "app-adder",
    template: `<div>
    {{first}} + {{second}} = {{result}}
</div>`
})
export class AdderComponent implements OnInit, OnDestroy {
    @Input() first: number;
    @Input() second: number;

    result: number;

    routeSubscription: Subscription;

    constructor(private route: ActivatedRoute, private router: Router) {
        console.log("constructed adder");

        const fragmentPromise = this.route.fragment.toPromise();
        fragmentPromise.then(value => {});

        this.route.params.subscribe(params => {
            console.log("subscription activated");
            this.first = Number(params["first"]);
            this.second = Number(params["second"]);
            this.calculate();

            if (isNaN(this.first) || isNaN(this.second)) {
                this.router.navigate(["invalid"], {
                    replaceUrl: false
                });
            }
        });

    }

    ngOnInit() {
        this.calculate();
    }

    ngOnDestroy() {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
        }
    }

    calculate() {
        this.result = this.first + this.second;
    }

}
