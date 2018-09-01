# switchMap

#### signature: `switchMap(project: function: Observable, resultSelector: function(outerValue, innerValue, outerIndex, innerIndex): any): Observable`

## Map to observable, complete previous inner observable, emit values.

### Examples

##### Example 1: Restart interval every 5 seconds

```ts
import { interval, Observable, of, timer } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

// emit immediately, then every 5s
const source = timer(0, 5000);
// switch to new inner observable when source emits, emit items that are emitted
const example = source.pipe(switchMap(() => interval(500)));
// output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
const subscribe = example.subscribe(console.log);
```

##### Example 2

```ts
import { interval, Observable, of, timer } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

const createInnerObservable = (id) =>
    Observable.create((observer) => {
        console.log("%ccreated inner observable:", "color:blue;", id);

        const handler = setInterval(() => {
            observer.next("inner:" + id);
        }, 3000);

        return () => {
            clearInterval(handler);
            console.log("%ccanceled inner observable:", "color:red;", id);
        };
    });

const dolog = tap((id) => {
    console.log("%carrived outer observable:", "color:green;", id);
});

const syncStream = switchMap((id) => createInnerObservable(id));

timer(0, 10000).pipe(
    dolog
    , syncStream)
    .subscribe((innerValue) => console.log("subscribed value:", innerValue));

    // =>
    // arrived outer observable: 0
    // created inner observable: 0
    // subscribed value: inner:0
    // subscribed value: inner:0
    // subscribed value: inner:0
    // arrived outer observable: 1
    // canceled inner observable: 0
    // created inner observable: 1

```

##### Example 3: Using a `resultSelector` function

```ts
import { interval, Observable, of, timer } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

// emit immediately, then every 5s
const source = timer(0, 5000);

const syncStream = switchMap(
    () => interval(2000),
    (outerValue, innerValue, outerIndex, innerIndex) => ({ outerValue, innerValue, outerIndex, innerIndex }));

// switch to new inner observable when source emits, invoke project function and emit values
const example = source.pipe(syncStream);
/*
    Output:
    {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
    {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
    {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
    {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
*/
const subscribe = example.subscribe(console.log);
```

##### Example 4

```ts
import { interval, Observable, of, timer } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

const timer$ = interval(1000);
const syncStream = switchMap((v) => of("a"));

const result = timer$.pipe(
    syncStream);

result.subscribe((x) => console.log(x));
// => a,a,a,a,a....
```