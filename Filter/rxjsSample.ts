import { from, interval, zip } from "rxjs";
import { sample } from "rxjs/operators";


export class SamplePoc {

    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit value every 1s
        const source = interval(1000);
        // sample last emitted value from source every 2s
        const sampling = sample(interval(2000));
        const example = source.pipe(sampling);
        // output: 2..4..6..8..
        const subscribe = example.subscribe(console.log);
    }

    public func2() {
        const source = zip(
            // emit 'Joe', 'Frank' and 'Bob' in sequence
            from(["Joe", "Frank", "Bob"]),
            // emit value every 2s
            interval(2000),
        );
        // sample last emitted value from source every 2.5s
        const sampling = sample(interval(2500));
        const example = source.pipe(sampling);
        // output: ["Joe", 0]...["Frank", 1]...........
        const subscribe = example.subscribe(console.log);
    }


}
