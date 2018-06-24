import { from, interval, Observable } from "rxjs";
import { filter, skip } from "rxjs/operators";


export class SkipPoc {

    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // emit every 1s
        const source = interval(1000);
        // skip the first 5 emitted values
        const example = source.pipe(skip(5));
        // output: 5...6...7...8........
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        // 3,4,5...
        const skipObs = numArrayObs.pipe(
            skip(2))
            .subscribe(console.log);

        // 3,4,5...
        const filterObs = numArrayObs.pipe(
            filter((val, index) => index > 1))
            .subscribe(console.log);

        // Same output!
    }


}
