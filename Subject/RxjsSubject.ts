
import { Subject } from "rxjs";


export class SubjectPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        const sub = new Subject();
        sub.next(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }

    /**
     * func2
     */
    public func2() {
        const sub = new Subject();
        const subscription = sub.subscribe(
            (t) => {console.log("Next:" + t); },
            (err) => {console.log("Error:" + err); },
            () => {console.log("complete."); },
        );

        sub.next(42);
        sub.next(56);
        sub.complete();
    }
}
