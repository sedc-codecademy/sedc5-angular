import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-subtracter",
    template: `<div>
    {{first}} - {{second}} = {{result}}
</div>`
})
export class SubtracterComponent implements OnInit {
    @Input() first: number;
    @Input() second: number;

    result: number;

    constructor(private route: ActivatedRoute, private router: Router) {
        console.log("constructed subtracter");
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

    calculate() {
        this.result = this.first - this.second;
    }

}
