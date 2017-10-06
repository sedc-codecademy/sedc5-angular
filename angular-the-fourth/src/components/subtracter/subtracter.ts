import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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

    constructor(private route: ActivatedRoute) {
        this.first = Number(this.route.snapshot.params["first"]);
        this.second = Number(this.route.snapshot.params["second"]);
    }

    ngOnInit() {
        this.calculate();
    }

    calculate() {
        this.result = this.first - this.second;
    }

}
