import { interval, Observable, of } from "rxjs";
import { take } from "rxjs/operators";


export class TakePoc {
    public test() {
        // this.func1();
        this.func2();

    }

    public func1() {

        // emit 1,2,3,4,5
        const source = of(1, 2, 3, 4, 5);
        // take the first emitted value then complete
        const example = source.pipe(take(1));
        // output: 1
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit value every 1s
        const interval$ = interval(1000);
        // take the first 5 emitted values
        const example = interval$.pipe(take(5));
        // output: 0,1,2,3,4
        const subscribe = example.subscribe((val) => console.log(val));
    }


}
