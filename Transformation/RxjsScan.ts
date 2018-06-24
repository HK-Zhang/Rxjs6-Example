import { interval, Observable, Subject } from "rxjs";
import { distinctUntilChanged, map, scan, startWith } from "rxjs/operators";

export class ScanPoc {
    public test() {
        this.func1();
        // this.func2();
        // this.func3();
    }

    public func1() {
        const subject = new Subject<number>();
        // basic scan example, sum over time starting with zero
        const example = subject.pipe(startWith(0), scan((acc, curr) => acc + curr));
        // log accumulated values
        const subscribe = example.subscribe((val) =>
            console.log("Accumulated total:", val),
        );
        // next values into subject, adding to the current sum
        subject.next(1); // 1
        subject.next(2); // 3
        subject.next(3); // 6
    }

    public func2() {
        // Accumulate values in an array, emit random values from this array.
        const scanObs = interval(1000).pipe(
            scan<any>((a, c) => a.concat(c), [])
            , map((r) => r[Math.floor(Math.random() * r.length)])
            , distinctUntilChanged())
            .subscribe(console.log);
    }

    public func3() {
        const subject = new Subject();
        // scan example building an object over time
        const example = subject.pipe(scan((acc, curr) => Object.assign({}, acc, curr), {}));
        // log accumulated values
        const subscribe = example.subscribe((val) =>
            console.log("Accumulated object:", val),
        );
        // next values into subject, adding properties to object
        subject.next({ name: "Joe" }); // {name: 'Joe'}
        subject.next({ age: 30 }); // {name: 'Joe', age: 30}
        subject.next({ favoriteLanguage: "JavaScript" }); // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    }
}
