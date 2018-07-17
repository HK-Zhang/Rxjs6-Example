import { interval } from "rxjs";
import { map, throttle } from "rxjs/operators";


export class ThrottlePoc {

    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit value every 1 second
        const source = interval(1000);
        // throttle for 2 seconds, emit latest value
        const throttleTwoSec = throttle((val) => interval(2000));

        const example = source.pipe(throttleTwoSec);

        // output: 0...3...6...9
        const subscribe = example.subscribe(console.log);
    }

    public func2() {
        // emit value every 1 second
        const source = interval(1000);

        // incrementally increase the time to resolve based on source
        const promise = (val) =>
            new Promise((resolve) =>
                setTimeout(() => resolve(`Resolved: ${val}`), val * 100),
            );

        const output = map((val) => `Throttled off Promise: ${val}`);

        // when promise resolves emit item from source
        const example = source.pipe(
            throttle(promise)
            , output);

        const subscribe = example.subscribe(console.log);

        // output:
        // Throttled off Promise: 0
        // Throttled off Promise: 1
        // Throttled off Promise: 2
        // Throttled off Promise: 3
        // Throttled off Promise: 4
        // Throttled off Promise: 5
        // Throttled off Promise: 6
    }


}
