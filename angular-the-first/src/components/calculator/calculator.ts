import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-calculator",
    template: `<div>
        I'm a calculator
        <div *ngIf="isResultValid()">{{first}} {{operation}} {{second}} = {{result}}</div>
        <div *ngIf="!isResultValid()">INVALID RESULT: given operation {{operation}}, valid operations are - + / *</div>
</div>`,
})
export class CalculatorComponent implements OnInit, OnChanges {
    @Input() first: number;

    @Input() second: number;

    @Input() operation: string;

    result: number;

    constructor() { }

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

    isResultValid() {
        return !isNaN(this.result);
    }
}
