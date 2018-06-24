import { AsyncSubject } from "rxjs";

export class AsyncSubjectPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const sub = new AsyncSubject();
        let i = 0;
        const handle = setInterval(() => {
            sub.next(i);
            if (++i > 3) {
                sub.complete();
                clearInterval(handle);
            }
        }, 500);

        const subscription = sub.subscribe(
            (t) => {console.log("Next:" + t); },
            (err) => {console.log("Error:" + err); },
            () => {console.log("complete."); },
        );
    }
}
