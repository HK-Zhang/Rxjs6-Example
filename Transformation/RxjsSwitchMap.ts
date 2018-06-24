import { interval, Observable, of, timer } from "rxjs";
import { switchMap, tap } from "rxjs/operators";


const createInnerObservable = (id) =>
    Observable.create((observer) => {
        console.log("%ccreated inner observable:", "color:blue;", id);

        const handler = setInterval(() => {
            observer.next("inner:" + id);
        }, 3000);

        return () => {
            clearInterval(handler);
            console.log("%ccanceled inner observable:", "color:red;", id);
        };
    });

export class SwithMapPoc {

    public test() {
        this.func();
        // this.func2();
        // this.func3();
    }

    public func() {
        timer(0, 10000).pipe(
            tap((id) => {
                console.log("%carrived outer observable:", "color:green;", id);
            })
            , switchMap((id) => createInnerObservable(id)))
            .subscribe((innerValue) => console.log("subscribed value:", innerValue));
    }

    public func2() {
        // emit immediately, then every 5s
        const source = timer(0, 5000);
        // switch to new inner observable when source emits, emit items that are emitted
        const example = source.pipe(switchMap(() => interval(500)));
        // output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func3() {
        // emit immediately, then every 5s
        const source = timer(0, 5000);
        // switch to new inner observable when source emits, invoke project function and emit values
        const example = source.pipe(switchMap(
            () => interval(2000),
            (outerValue, innerValue, outerIndex, innerIndex) => ({outerValue, innerValue, outerIndex, innerIndex})));
        /*
            Output:
            {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
            {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
            {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
            {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func4() {
        const timer$ = interval(1000);
        const result = timer$.pipe(switchMap((v) => of("a")));

        result.subscribe((x) => console.log(x));
    }
}
