# delay

#### signature: `delay(delay: number | Date, scheduler: Scheduler): Observable`

## Delay emitted values by given time.

### Examples

##### Example 1: Delay for increasing durations

```ts
import { merge, of } from "rxjs";
import { delay, mapTo } from "rxjs/operators";

        // emit one item
        const example = of(null);
        // delay output of each by an extra second
        const message = merge(
            example.pipe(mapTo("Hello")),
            example.pipe(mapTo("World!"), delay(1000)),
            example.pipe(mapTo("Goodbye"), delay(2000)),
            example.pipe(mapTo("World!"), delay(3000)),
        );
        // output: 'Hello'...'World!'...'Goodbye'...'World!'
        const subscribe = message.subscribe(console.log);
```