import { interval } from "rxjs";
import { pairwise } from "rxjs/operators";


export class PairwisePoc {
    public test() {
        this.func1();
    }

    public func1() {
        interval(1000).pipe(pairwise())
            .subscribe(console.log); // pair[1] - pair[0]
        // => [0, 1] [1, 2] ...
    }

}
