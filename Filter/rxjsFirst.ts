import { from } from "rxjs";
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
        const selectFirst5 = first((num) => num === 5);
        const example = source.pipe(selectFirst5);
        // output: "First to pass test: 5"
        const subscribe = example.subscribe((val) =>
            console.log(`First to pass test: ${val}`),
        );
    }

    public func3() {
        const source = from([1, 2, 3, 4, 5]);
        // using optional projection function
        const selectFirstEven = first<any>(
            (num) => num % 2 === 0,
            (result, index) => `First even: ${result} is at index: ${index}`,
        );
        const example = source.pipe(selectFirstEven);
        // output: "First even: 2 at index: 1"
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func4() {
        const source = from([1, 2, 3, 4, 5]);
        // no value will pass, emit default
        const firstOver5 = first<any>((val) => val > 5, "Nothing");
        const mapping = map((val) => `Value: ${val}`);
        const example = source.pipe(firstOver5, mapping);
        // output: 'Nothing'
        const subscribe = example.subscribe((val) => console.log(val));
    }

}
