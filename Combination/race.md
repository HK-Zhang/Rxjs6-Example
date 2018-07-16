# race

#### signature: `race(): Observable`

## The observable to emit first is used.

### Examples

##### Example 1: race with 4 observables

```ts
import { interval, of, race } from "rxjs";
import { catchError, delay, map, mapTo } from "rxjs/operators";

// take the first observable to emit
const example = race<any>(
    // emit every 1.5s
    interval(1500),
    // emit every 1s
    interval(1000).pipe(mapTo("1s won!")),
    // emit every 2s
    interval(2000),
    // emit every 2.5s
    interval(2500),
);
// output: "1s won!"..."1s won!"...etc
const subscribe = example.subscribe(console.log);
```

##### Example 2: race with an error

```ts
const raiserror = map(() => {
    throw new Error("error");
});

// Throws an error and ignore the rest of the observables.
const first = of("first").pipe(
    delay(100)
    , raiserror);

const second = of("second").pipe(delay(200));
const third = of("third").pipe(delay(300));
const errorHandler = catchError((error) => of(`Bad: ${error}`));

const race$ = race(first, second, third)
    .pipe(errorHandler)
    .subscribe(console.log);

// => Bad: Error: error
```