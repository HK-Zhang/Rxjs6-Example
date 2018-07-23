import { combineLatest, interval } from "rxjs";

export class CombineLatestPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const intervalOne$ = interval(1000);
        const intervalTwo$ = interval(2000);

        combineLatest(
            intervalOne$,
            intervalTwo$,
        ).subscribe(console.log);

        // => [0, 0] [1, 0] [2, 0] [2, 1] [3, 1] [4, 1]
    }

}