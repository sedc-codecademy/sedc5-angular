import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-calculator",
    template: `<div>
    {{ first }} {{ operation }} {{ second }} = {{ result }}
</div>`
})
export class CalculatorComponent implements OnInit, OnChanges {
    @Input() first: number;
    @Input() second: number;
    @Input() operation: string;

    result: number;

    ngOnInit() {
        this.calculate();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.calculate();
    }

    calculate() {
        switch (this.operation) {
            case "+":
                this.result = this.first + this.second;
                break;
            case "-":
                this.result = this.first - this.second;
                break;
            case "*":
                this.result = this.first * this.second;
                break;
            case "/":
                this.result = Math.floor(this.first / this.second);
                break;
            default:
                this.result = NaN;
        }
    }
}
