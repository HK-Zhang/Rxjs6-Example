import { interval, Observable } from "rxjs";
import { skipWhile } from "rxjs/operators";


export class SkipWhilePoc {

    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // emit every 1s
        const source = interval(1000);
        // skip emitted values from source while value is less than 5
        const example = source.pipe(skipWhile((val) => val < 5));
        // output: 5...6...7...8........
        const subscribe = example.subscribe((val) => console.log(val));
    }

}
