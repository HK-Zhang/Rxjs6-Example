import { from, Observable } from "rxjs";
import { single } from "rxjs/operators";

export class SinglePoc {

    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // emit (1,2,3,4,5)
        const source = from([1, 2, 3, 4, 5]);
        // emit one item that matches predicate
        const example = source.pipe(single((val) => val === 4));
        // output: 4
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
