import { from } from "rxjs";
import { last } from "rxjs/operators";


export class LastPoc {

    public test() {
        // this.func1();
        // this.func2();
        this.func3();
    }

    public func1() {
        const source = from([1, 2, 3, 4, 5]);
        // no arguments, emit last value
        const example = source.pipe(last());
        // output: "Last value: 5"
        const subscribe = example.subscribe((val) => console.log(`Last value: ${val}`));
    }

    public func2() {
        const source = from([1, 2, 3, 4, 5]);
        // emit last even number
        const lastEven = last((num: number) => num % 2 === 0);
        const exampleTwo = source.pipe(lastEven);
        // output: "Last to pass test: 4"
        const subscribeTwo = exampleTwo.subscribe((val) =>
            console.log(`Last to pass test: ${val}`),
        );
    }

    public func3() {
        const source = from([1, 2, 3, 4, 5, 4]);
        // supply an option projection function for the second parameter
        const lastOver4 = last<any>(
            (v) => v > 4,
            (v) => `The highest emitted number was ${v}`,
        );
        const exampleTwo = source.pipe(lastOver4);
        // output: 'The highest emitted number was 5'
        const subscribeTwo = exampleTwo.subscribe(console.log);
    }

}
