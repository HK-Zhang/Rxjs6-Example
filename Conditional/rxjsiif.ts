import { iif, Observable, of } from "rxjs";

export class IIFPoc {

    public test() {
        this.func1();
    }

    public func1() {
        const shouldRun = true;

        const source$ = iif(() => shouldRun, of(42), of(56));

        const subscription = source$.subscribe(
            (x) => console.log("Next: " + x),
            (err) => console.log("Error: " + err),
            () => console.log("Completed"));
    }
}
