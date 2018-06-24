import { interval, Observable, of } from "rxjs";
import { scan, startWith } from "rxjs/operators";


export class StartWithPoc {
    public test() {
        // this.func1();
        // this.func2();
        this.func3();
    }

    public func1() {
        // emit (1,2,3)
        const source = of(1, 2, 3);
        // start with 0
        const example = source.pipe(startWith(0));
        // output: 0,1,2,3
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit ('World!', 'Goodbye', 'World!')
        const source = of("World!", "Goodbye", "World!");
        // start with 'Hello', concat current string to previous
        const scanSource = scan((acc, curr) => `${acc} ${curr}`);

        const example = source.pipe(
            startWith("Hello")
            , scanSource);
        /*
          output:
          "Hello"
          "Hello World!"
          "Hello World! Goodbye"
          "Hello World! Goodbye World!"
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func3() {
        // emit values in sequence every 1s
        const source = interval(1000);
        // start with -3, -2, -1
        const example = source.pipe(startWith(-3, -2, -1));
        // output: -3, -2, -1, 0, 1, 2....
        const subscribe = example.subscribe((val) => console.log(val));
    }

}
