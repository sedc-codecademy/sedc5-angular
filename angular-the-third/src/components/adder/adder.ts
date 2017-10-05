import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-adder",
    template: `<div>
    {{ first }} + {{ second }} = {{ result }}
</div>`
})
export class AdderComponent implements OnInit, OnChanges {
    @Input() first: number;
    @Input() second: number;

    result: number;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.first = Number(this.route.snapshot.params["first"]);
        this.second = Number(this.route.snapshot.params["second"]);
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
}
