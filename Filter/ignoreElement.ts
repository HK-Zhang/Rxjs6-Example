import { interval, Observable, of, throwError } from "rxjs";
import { flatMap, ignoreElements, take } from "rxjs/operators";

export class IgnoreElementPoc {

    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit value every 100ms
        const source = interval(100);
        // ignore everything but complete
        const example = source.pipe(
            take(5)
            , ignoreElements());
        // output: "COMPLETE!"
        const subscribe = example.subscribe(
            (val) => console.log(`NEXT: ${val}`),
            (val) => console.log(`ERROR: ${val}`),
            () => console.log("COMPLETE!"),
        );
    }

    public func2() {
        // emit value every 100ms
        const source = interval(100);

        const createError = flatMap((val) => {
            if (val === 4) {
                return throwError(`ERROR AT ${val}`);
            }
            return of(val);
        });

        // ignore everything but error
        const error = source.pipe(
            createError
            , ignoreElements());
        // output: "ERROR: ERROR AT 4"
        const subscribe = error.subscribe(
            (val) => console.log(`NEXT: ${val}`),
            (val) => console.log(`ERROR: ${val}`),
            () => console.log("SECOND COMPLETE!"),
        );
    }


}