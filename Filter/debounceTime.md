# debounceTime

#### signature: `debounceTime(dueTime: number, scheduler: Scheduler): Observable`

## Discard emitted values that take less than the specified time between output

---

:bulb: This operator is popular in scenarios such as type-ahead where the rate
of user input must be controlled!

---

### Examples

##### Example 1: Debouncing based on time

```ts
import { from, of } from "rxjs";
import { debounceTime, delay, flatMap } from "rxjs/operators";

const times = [
    { value: 0, time: 100 },
    { value: 1, time: 600 },
    { value: 2, time: 400 },
    { value: 3, time: 700 },
    { value: 4, time: 200 },
];

// Delay each item by time and project value;
const mapping = flatMap((item: any) => of(item.value).pipe(delay(item.time)));

const source = from(times).pipe(
    mapping
    , debounceTime(500 /* ms */));

const subscription = source.subscribe(
    (x) => {
        console.log("Next: %s", x);
    },
    (err) => {
        console.log("Error: %s", err);
    },
    () => {
        console.log("Completed");
    });

// => Next: 3
// => Completed
```