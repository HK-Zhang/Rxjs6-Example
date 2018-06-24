import { Observable, of } from "rxjs";
import { reduce, scan } from "rxjs/operators";




export class ReducePoc {

    public test() {
        this.func1();
    }

    public func1() {
        const source = of(1, 2, 3, 4);
        const example = source.pipe(reduce((acc, val) => acc + val));
        const example2 = source.pipe(scan((acc, val) => acc + val));
        // output: Sum: 10'
        const subscribe = example.subscribe((val) => console.log("Sum:", val));
        const subscribe2 = example2.subscribe((val) =>
            console.log("Accumulated total:", val),
        );
    }


}
