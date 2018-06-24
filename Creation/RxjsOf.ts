import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";


const tfx = (item, index) => {
    return item * 2;
};

export class OfPoc {
    public test() {
        this.func1();
        // this.func3();
    }

    public func1() {
        // emits any number of provided values in sequence
        let source = of(1, 2, 3, 4, 5);
        // output: 1,2,3,4,5
        const subscribe = source.subscribe((val) => console.log(val));

        source = of(6, 7);
    }

    public func2() {
        const source = of(1, 2, 3);

        const target = source.pipe(map(tfx));

        target.subscribe((x) => console.log(x));
    }

    public func3() {
        // emits values of any type
        const source = of<any>({ name: "Brian" }, [1, 2, 3], function hello() {
            return "Hello";
        });
        // output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
