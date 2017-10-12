import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "app-adder",
    template: `<div>
    {{ first }} + {{ second }} = {{ result }}
</div>`
})
export class AdderComponent implements OnInit, OnChanges, OnDestroy {
    @Input() first: number;
    @Input() second: number;

    result: number;
    routeSubscription: Subscription;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.first = Number(params["first"]);
            this.second = Number(params["second"]);
            this.calculate();
            console.log("recalculated");
        });


        // this.first = Number(this.route.snapshot.params["first"]);
        // this.second = Number(this.route.snapshot.params["second"]);
    }

    ngOnInit() {
        this.calculate();
        if (isNaN(this.result)) {
            this.router.navigate(["invalid", "+", this.first, this.second]);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        this.calculate();
    }

    calculate() {
        this.result = this.first + this.second;
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }
}
