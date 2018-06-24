import { forkJoin, Observable, timer } from "rxjs";
import { mapTo } from "rxjs/operators";


export class ForkJoinPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const getPostOne$ = timer(1000).pipe(mapTo({ id: 1 }));
        const getPostTwo$ = timer(2000).pipe(mapTo({ id: 2 }));
        // Runs all observable sequences in parallel and collect their last elements.
        forkJoin(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }

}
