import { forkJoin, interval, timer } from "rxjs";
import { mapTo } from "rxjs/operators";


export class ForkJoinPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        const getPostOne$ = timer(1000).pipe(mapTo("id: 1"));
        const getPostTwo$ = timer(2000).pipe(mapTo("name: hk"));
        // Runs all observable sequences in parallel and collect their last elements.
        forkJoin(getPostOne$, getPostTwo$).subscribe(console.log);
        // => ["id: 1", "name: hk"]
    }

    public func2() {
        const getPostOne$ = interval(1000).pipe(mapTo("id: 1"));
        const getPostTwo$ = interval(2000).pipe(mapTo("name: hk"));
        // Runs all observable sequences in parallel and collect their last elements.
        forkJoin(getPostOne$, getPostTwo$).subscribe(console.log);
        // the execution never ends due to interval will not emit complete event.
    }

}
