let Promise = require("promise");
import { from, Observable, of } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";

export class FromPromisePoc {
    public test() {
        this.func1();
    }

    public func1() {
        // example promise that will resolve or reject based on input
        const myPromise = (willReject) => {
            return new Promise((resolve, reject) => {
                if (willReject) {
                    reject("Rejected!");
                }
                resolve("Resolved!");
            });
        };
        // emit true, then false
        const source = of(true, false);
        const example = source.pipe(mergeMap((val) =>
        from(myPromise(val)).pipe(// catch and gracefully handle rejections
            catchError((error) => of(`Error: ${error}`))),
        ));
        // output: 'Error: Rejected!', 'Resolved!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
