# from

#### signature: `from(ish: ObservableInput, mapFn: function, thisArg: any, scheduler: Scheduler): Observable`

## Turn an array, promise, or iterable into an observable.

### Examples

##### Example 1: Observable from promise

```ts
import { from, of } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";

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

// catch and gracefully handle rejections
const handleError = catchError((error) => of(`Error: ${error}`));

const merging = mergeMap((val) => from(myPromise(val)).pipe(handleError));

const example = source.pipe(merging);

// output: 'Error: Rejected!', 'Resolved!'
const subscribe = example.subscribe(console.log);
```