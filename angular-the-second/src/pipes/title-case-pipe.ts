import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string) {
        if (!value) {
            return value;
        }

        let words = value.split(" ");
        words = words.map(w => {
            const first = w.slice(0, 1).toUpperCase();
            const rest = w.slice(1).toLowerCase();
            return first + rest;
        });
        const result = words.join(" ");
        return result;
    }
}
