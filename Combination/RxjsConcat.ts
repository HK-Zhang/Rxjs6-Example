import { concat, Observable, timer } from "rxjs";
import { mapTo } from "rxjs/operators";

export class ConcatPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const getPostOne$ = timer(3000).pipe(mapTo({ id: 1 }));
        const getPostTwo$ = timer(1000).pipe(mapTo({ id: 2 }));

        concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }

}
