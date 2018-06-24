import { interval, Observable } from "rxjs";
import { pairwise } from "rxjs/operators";


export class PairwisePoc {
    public test() {
        this.func1();
    }

    public func1() {
        interval(1000).pipe(pairwise())
            .subscribe((pair) => console.log(pair)); // pair[1] - pair[0]
    }

}
