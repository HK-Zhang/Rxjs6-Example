import { from } from "rxjs";
import { map } from "rxjs/operators";

export class MapPoc {
    public test(): void {
        this.func1();
    }

    public func1(): void {
        // emit (1,2,3,4,5)
        const source = from([1, 2, 3, 4, 5]);
        // add 10 to each value
        const add10 = map((val: number) => val + 10);
        const example = source.pipe(add10);
        // output: 11,12,13,14,15
        const subscribe = example.subscribe(console.log);
    }

    public func2(): void {
        // emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
        const source = from([
            { name: "Joe", age: 30 },
            { name: "Frank", age: 20 },
            { name: "Ryan", age: 50 }
        ]);
        // grab each persons name
        const selectname = map((person: any) => person.name);
        const example = source.pipe(selectname);
        // output: "Joe","Frank","Ryan"
        const subscribe = example.subscribe(console.log);
    }
}
