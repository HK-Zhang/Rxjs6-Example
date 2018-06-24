import { interval, Observable, timer } from "rxjs";
import { filter, map, scan, takeUntil, withLatestFrom } from "rxjs/operators";


export class TakeUntilPoc {
    public test() {
        // this.func1();
        this.func2();

    }

    public func1() {

        // emit value every 1s
        const source = interval(1000);
        // after 5 seconds, emit value
        const timer$ = timer(5000);
        // when timer emits after 5s, complete source
        const example = source.pipe(takeUntil(timer$));
        // output: 0,1,2,3
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit value every 1s
        const source = interval(1000);
        // is number even?
        const isEven = (val) => val % 2 === 0;
        // only allow values that are even
        const evenSource = source.pipe(filter(isEven));
        // keep a running total of the number of even numbers out
        const evenNumberCount = evenSource.pipe(scan((acc, _) => acc + 1, 0));
        // do not emit until 5 even numbers have been emitted
        const fiveEvenNumbers = evenNumberCount.pipe(filter((val) => val > 5));

        const example = evenSource.pipe(
            // also give me the current even number count for display
            withLatestFrom(evenNumberCount)
            , map(([val, count]) => `Even number (${count}) : ${val}`)
            // when five even numbers have been emitted, complete source observable
            , takeUntil(fiveEvenNumbers));
        /*
            Even number (1) : 0,
            Even number (2) : 2
            Even number (3) : 4
            Even number (4) : 6
            Even number (5) : 8
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }


}
