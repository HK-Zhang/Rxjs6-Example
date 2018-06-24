import { interval, Observable, of } from "rxjs";
import { concatMapTo, take } from "rxjs/operators";


export class ConcatMapToPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit value every 2 seconds
        const interval$ = interval(2000);
        const message = of("Second(s) elapsed!");
        // when interval emits, subscribe to message until complete, merge for result
        const example = interval$.pipe(concatMapTo(message, (time, msg) => `${time} ${msg}`));
        // log values
        // output: '0 Second(s) elapsed', '1 Second(s) elapsed'
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit value every 2 seconds
        const interval$ = interval(2000);
        // emit value every second for 5 seconds
        const source = interval(1000).pipe(take(5));
        /*
          ***Be Careful***: In situations like this where the source emits at a faster pace
          than the inner observable completes, memory issues can arise.
          (interval emits every 1 second, basicTimer completes every 5)
        */
        // basicTimer will complete after 5 seconds, emitting 0,1,2,3,4
        const example = interval$.pipe(concatMapTo(
            source,
            (firstInterval, secondInterval) => `${firstInterval} ${secondInterval}`,
        ));
        /*
          output: 0 0
                  0 1
                  0 2
                  0 3
                  0 4
                  1 0
                  1 1
                  continued...

        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
