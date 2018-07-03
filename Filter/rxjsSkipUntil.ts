import { interval, Observable, timer } from "rxjs";
import { skipUntil } from "rxjs/operators";



export class SkipUntilPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit every 1s
        const source = interval(1000);
        // skip emitted values from source until inner observable emits (6s)
        const skip5sec = skipUntil(timer(6000));
        const example = source.pipe(skip5sec);
        // output: 5...6...7...8........
        const subscribe = example.subscribe((val) => console.log(val));
    }

}
