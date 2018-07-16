# debounce

#### signature: `debounce(durationSelector: function): Observable`

## Discard emitted values that take less than the specified time, based on selector function, between output.

---

### Examples

##### Example 1: Debounce on timer

```ts
import { interval, of, timer } from "rxjs";
import { debounce } from "rxjs/operators";

// emit four strings
const example = of("WAIT", "ONE", "SECOND", "Last will display");
/*
    Only emit values after a second has passed between the last emission,
    throw away all other values
*/
const debouce1s = debounce(() => timer(1000));
const debouncedExample = example.pipe(debouce1s);
/*
    In this example, all values but the last will be omitted
    output: 'Last will display'
*/
const subscribe = debouncedExample.subscribe(console.log);
```

##### Example 2: Debounce at increasing interval

```ts
import { interval, of, timer } from "rxjs";
import { debounce } from "rxjs/operators";

// emit value every 1 second, ex. 0...1...2
const interval$ = interval(1000);
// raise the debounce time by 200ms each second
const debourceFewSecs = debounce((val: number) =>
    timer(val * 200),
);
const debouncedInterval = interval$.pipe(debourceFewSecs);
/*
  After 5 seconds, debounce time will be greater than interval time,
  all future values will be thrown away
  output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
*/
const subscribe = debouncedInterval.subscribe((val) =>
    console.log(`Example Two: ${val}`),
);
```