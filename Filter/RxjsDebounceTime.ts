import { from, Observable, of } from "rxjs";
import { debounceTime, delay, flatMap } from "rxjs/operators";

export class DebounceTimePoc {
    public test() {
        this.func1();
    }

    public func1() {

        const times = [
            { value: 0, time: 100 },
            { value: 1, time: 600 },
            { value: 2, time: 400 },
            { value: 3, time: 700 },
            { value: 4, time: 200 },
        ];

        // Delay each item by time and project value;
        const source = from(times).pipe(
            flatMap((item) => {
                return of(item.value).pipe(
                    delay(item.time));
            })
            , debounceTime(500 /* ms */));

        const subscription = source.subscribe(
            (x) => {
                console.log("Next: %s", x);
            },
            (err) => {
                console.log("Error: %s", err);
            },
            () => {
                console.log("Completed");
            });

        // => Next: 3
        // => Completed
    }

}
