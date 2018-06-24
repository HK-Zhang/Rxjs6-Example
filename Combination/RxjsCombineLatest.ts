import { combineLatest, interval, Observable } from "rxjs";

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
        ).subscribe((all) => console.log(all));
    }

}
