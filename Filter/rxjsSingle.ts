import { from, of } from "rxjs";
import { catchError, single } from "rxjs/operators";

export class SinglePoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit one item that matches predicate
        const single4 = single((val) => val === 4);
        const errorHandler = catchError((error) => of(`Bad Promise: ${error}`));

        // emit (1,2,3,4,4,5)
        const source = from([1, 2, 3, 4, 4, 5]);
        const example = source.pipe(single4, errorHandler);
        const subscribe = example.subscribe(console.log);
        // output: Bad Promise: Sequence contains more than one element

        // emit (1,2,3,4,5)
        const source2 = from([1, 2, 3, 4, 5]);
        const example2 = source2.pipe(single4, errorHandler);
        const subscribe2 = example2.subscribe(console.log);
        // output: 4

    }
}
