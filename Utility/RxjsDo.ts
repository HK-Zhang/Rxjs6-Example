import { Observable, of, range } from "rxjs";
import { map, tap } from "rxjs/operators";


export class DoPoc {

    public test() {
        this.func1();
    }

    public func1() {
        const source = of(1, 2, 3, 4, 5);
        // transparently log values from source with 'do'
        const example = source.pipe(
            tap((val) => console.log(`BEFORE MAP: ${val}`))
            , map((val) => val + 10)
            , tap((val) => console.log(`AFTER MAP: ${val}`)));
        // 'do' does not transform values
        // output: 11...12...13...14...15
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        const source = range(0, 3).pipe(
            tap(
                (x) => console.log("Do Next:", x),
                (err) => console.log("Do Error:", err),
                () => console.log("Do Completed"),
        ));

        const subscription = source.subscribe(
            (x) => console.log("Next: %s", x),
            (err) => console.log("Error: %s", err),
            () => console.log("Completed"));
    }
}
