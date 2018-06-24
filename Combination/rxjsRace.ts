import { interval, Observable, of, race } from "rxjs";
import { delay, map, mapTo } from "rxjs/operators";


export class RacePoc {

    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // const win = Observable.interval(1000);
        // const fwin = win.mapTo('1s won!');
        // take the first observable to emit
        const example = race<any>(
            // emit every 1.5s
            interval(1500),
            // emit every 1s
            interval(1000).pipe(mapTo("1s won!")),
            // emit every 2s
            interval(2000),
            // emit every 2.5s
            interval(2500),
        );
        // output: "1s won!"..."1s won!"...etc
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {

        const raiserror = map(() => {
            throw new Error("error");
        });

        // Throws an error and ignore the rest of the observables.
        const first = of("first").pipe(
            delay(100)
            , raiserror);

        const second = of("second").pipe(delay(200));
        const third = of("third").pipe(delay(300));

        const race$ = race(first, second, third).subscribe((val) =>
            console.log(val),
        );
    }

}
