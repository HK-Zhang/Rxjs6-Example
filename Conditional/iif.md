# every

#### signature: `iif<number, number>(condition: () => boolean, trueResult?: SubscribableOrPromise<number>, falseResult?: SubscribableOrPromise<number>): Observable<number>`

## accepts a condition function and two Observables. When an Observable returned by the operator is subscribed, condition function will be called. Based on what boolean it returns at that moment, consumer will subscribe either to the first Observable (if condition was true) or to the second (if condition was false). 

### Examples

##### Example 1: Some values false

```ts
import { iif, of } from "rxjs";

const shouldRun = true;

const source$ = iif(() => shouldRun, of(42), of(56));

const subscription = source$.subscribe(
    (x) => console.log("Next: " + x),
    (err) => console.log("Error: " + err),
    () => console.log("Completed"));

            // Next: 42
            // Completed
```