import { Observable, of } from "rxjs";
import { every } from "rxjs/operators";


export class EveryPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit 5 values
        const source = of(1, 2, 3, 4, 5);

        // is every value even?
        const isEveryEven = every((val: number) => val % 2 === 0);
        const example = source.pipe(isEveryEven);
        // output: false
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit 5 values
        const allEvens = of(2, 4, 6, 8, 10);

        // is every value even?
        const isEveryEven = every((val: number) => val % 2 === 0);
        const example = allEvens.pipe(isEveryEven);
        // output: true
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
