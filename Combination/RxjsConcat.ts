import { concat, interval, timer } from "rxjs";
import { mapTo } from "rxjs/operators";

export class ConcatPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        const getPostOne$ = timer(3000).pipe(mapTo("{ id: 1 }"));
        const getPostTwo$ = timer(1000).pipe(mapTo("{ id: 2 }"));

        concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));

        // => { id: 1 }
        // { id: 2 }
    }

    public func2() {
        const getPostOne$ = interval(3000).pipe(mapTo("{ id: 1 }"));
        const getPostTwo$ = interval(1000).pipe(mapTo("{ id: 2 }"));

        concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));

        // => { id: 1 }
        // { id: 1 }
        // ...
        // { id: 1 }
        // ...
    }

}
