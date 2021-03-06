import { interval, of, range, zip } from "rxjs";
import { delay, take } from "rxjs/operators";

export class ZipPoc {

    public test() {
        // this.func1();
        // this.func2();
        this.func3();
        // this.func4();
    }

    public func1() {
        const sourceOne = of("Hello");
        const sourceTwo = of("World!");
        const sourceThree = of("Goodbye");
        const sourceFour = of("World!");
        // wait until all observables have emitted a value then emit all as an array
        const example = zip(
            sourceOne,
            sourceTwo.pipe(delay(1000)),
            sourceThree.pipe(delay(2000)),
            sourceFour.pipe(delay(3000)),
        );
        // output: ["Hello", "World!", "Goodbye", "World!"]
        const subscribe = example.subscribe(console.log);
    }

    public func2() {

        // emit every 1s
        const v = interval(1000);
        // when one observable completes no more values will be emitted
        const example = zip(v, v.pipe(take(2)));
        // output: [0,0]...[1,1]
        const subscribe = example.subscribe(console.log);
    }

    public func3() {
        const source = of("src");
        const example = zip(source, range(1, 4));
        const subscribe = example.subscribe(console.log);
        // ["src", 1]
    }

    public func4() {
        const source = interval(1000);
        const example = zip(source, range(1, 4));
        const subscribe = example.subscribe(console.log);
        // [0, 1]
        // [1, 2]
        // [2, 3]
        // [3, 4]
    }

}
