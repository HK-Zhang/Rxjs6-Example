var Promise = require("promise");
import { from, Observable, of, throwError, timer } from "rxjs";
import { catchError, flatMap } from "rxjs/operators";

export class CatchPoc {
    public test() {
        // this.func1();
        // this.func2();
        this.func3();
    }

    public func1() {
        // emit error
        const source = throwError("This is an error!");
        // gracefully handle error, returning observable with error message
        const errorHandler = catchError((val) => of(`I caught: ${val}`));
        const example = source.pipe(errorHandler);
        // output: 'I caught: This is an error'
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // create promise that immediately rejects
        const myBadPromise = () =>
            new Promise((resolve, reject) => reject("Rejected!"));
        // emit single value after 1 second
        const source = timer(1000);
        // catch rejected promise, returning observable containing error message
        const errorHandler = catchError((error) => of(`Bad Promise: ${error}`));
        const promise$ = from(myBadPromise()).pipe(errorHandler);

        const example = source.pipe(
            flatMap(() => promise$));
        // output: 'Bad Promise: Rejected'
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func3() {
        // create promise that immediately rejects
        const myBadPromise = () =>
            new Promise((resolve, reject) => resolve("Approve!"));
        // emit single value after 1 second
        const source = timer(1000);
        // catch rejected promise, returning observable containing error message
        const errorHandler = catchError((error) =>
            of(`Bad Promise: ${error}`),
        );

        const promise$ = from(myBadPromise()).pipe(errorHandler);

        const example = source.pipe(flatMap(() => promise$));
        // output: 'Approve!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
