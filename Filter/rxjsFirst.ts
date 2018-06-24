import { from, Observable } from "rxjs";
import { first, map } from "rxjs/operators";


export class FirstPoc {

    public test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }

    public func1() {
        const source = from([1, 2, 3, 4, 5]);
        // no arguments, emit first value
        const example = source.pipe(first());
        // output: "First value: 1"
        const subscribe = example.subscribe((val) => console.log(`First value: ${val}`));
    }

    public func2() {
        const source = from([1, 2, 3, 4, 5]);
        // emit first item to pass test
        const example = source.pipe(first((num) => num === 5));
        // output: "First to pass test: 5"
        const subscribe = example.subscribe((val) =>
            console.log(`First to pass test: ${val}`),
        );
    }

    public func3() {
        const source = from([1, 2, 3, 4, 5]);
        // using optional projection function
        const example = source.pipe(first<any>(
            (num) => num % 2 === 0,
            (result, index) => `First even: ${result} is at index: ${index}`,
        ));
        // output: "First even: 2 at index: 1"
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func4() {
        const source = from([1, 2, 3, 4, 5]);
        // no value will pass, emit default
        const example = source.pipe(first<any>((val) => val > 5, "Nothing"), map((val) => `Value: ${val}`));
        // output: 'Nothing'
        const subscribe = example.subscribe((val) => console.log(val));
    }

}
