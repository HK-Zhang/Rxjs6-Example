import { BehaviorSubject } from "rxjs";

export class BehaviorSubjectPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func2() {
        const sub = new BehaviorSubject(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }

    /**
     * func1
     */
    public func1() {
        const sub = new BehaviorSubject(42);
        const subscription = sub.subscribe(
            (t) => {console.log("Next:" + t); },
            (err) => {console.log("Error:" + err); },
            () => {console.log("complete."); },
        );

        sub.next(56);
        sub.complete();
    }
}
