# throttleTime

#### signature: `throttleTime(duration: number, scheduler: Scheduler): Observable`

## Emit latest value when specified duration has passed.

### Examples

##### Example 1: Receive latest value every 5 seconds


```ts
import { interval, merge, Observable } from "rxjs";
import { throttleTime } from "rxjs/operators";

//emit value every 1 second
const source = interval(1000);
/*
  throttle for five seconds
  last value emitted before throttle ends will be emitted from source
*/
const example = source.pipe(throttleTime(5000));
//output: 0...6...12
const subscribe = example.subscribe(val => console.log(val));
```

##### Example 2: Throttle merged observable


```ts
import { interval, merge, Observable } from "rxjs";
import { throttleTime } from "rxjs/operators";

const source = merge(
    // emit every .75 seconds
    interval(750),
    // emit every 1 second
    interval(1000),
);
// throttle in middle of emitted values
const example = source.pipe(throttleTime(1200));
// output: 0...1...4...4...8...7
const subscribe = example.subscribe((val) => console.log(val));

```