import { from, Observable } from "rxjs";
import * as Collections from "typescript-collections";
const Promise = require("promise");

export class FromPoc {
    public test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }

    public func1() {
        // emit array as a sequence of values
        const arraySource = from([1, 2, 3, 4, 5]);
        // output: 1,2,3,4,5
        const subscribe = arraySource.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit result of promise
        const promiseSource = from(
            new Promise((resolve) => resolve("Hello World!")),
        );
        // output: 'Hello World'
        const subscribe = promiseSource.subscribe((val) => console.log(val));
    }

    public func3() {
        // emit string as a sequence
        const source = from("Hello World");
        // output: 'H','e','l','l','o',' ','W','o','r','l','d'
        const subscribe = source.subscribe((val) => console.log(val));
    }

    public func4() {
        const map: { [key: number]: string; length: number; } = {length: 0};
        map[0] = "Hi";
        map[1] = "Bye";
        map.length = 2;

        const mapSource = from(map);
        // output: [1, 'Hi'], [2, 'Bye']
        const subscribe = mapSource.subscribe((val) => console.log(val));
    }
}
