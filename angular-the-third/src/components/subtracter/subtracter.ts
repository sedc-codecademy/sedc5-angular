import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-subtracter",
    template: `<div>
    {{ first }} - {{ second }} = {{ result }}
</div>`
})
export class SubtracterComponent implements OnInit, OnChanges {
    @Input() first: number;
    @Input() second: number;

    result: number;

    ngOnInit() {
        this.calculate();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.calculate();
    }

    calculate() {
        this.result = this.first - this.second;
    }
}