# catchError

#### signature: `catchError(project : function): Observable`

## Gracefully handle errors in an observable sequence.

### Examples

##### Example 1: Catching error from observable

```ts
import { from, of, throwError, timer } from "rxjs";
import { catchError, flatMap } from "rxjs/operators";

// emit error
const source = throwError("This is an error!");
// gracefully handle error, returning observable with error message
const errorHandler = catchError((val) => of(`I caught: ${val}`));
const example = source.pipe(errorHandler);
// output: 'I caught: This is an error'
const subscribe = example.subscribe(console.log);
```

##### Example 2: Catching rejected promise

```ts
import { from, of, throwError, timer } from "rxjs";
import { catchError, flatMap } from "rxjs/operators";

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
const subscribe = example.subscribe(console.log);
```