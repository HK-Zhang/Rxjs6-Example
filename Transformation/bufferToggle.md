# bufferToggle

#### signature: `bufferToggle(openings: Observable, closingSelector: Function): Observable`

## Toggle on to catch emitted values from source, toggle off to emit buffered values as array.

### Examples

##### Example 1: Toggle buffer on and off at interval

```ts
import { interval } from "rxjs";
import { bufferToggle } from "rxjs/operators";

        // emit value every second
        const sourceInterval = interval(1000);
        // start first buffer after 5s, and every 5s after
        const startInterval = interval(5000);
        // emit value after 3s, closing corresponding buffer
        const closingInterval = (val) => {
            console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
            return interval(3000);
        };
        // every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
        const bufferToggleInterval = sourceInterval.pipe(bufferToggle(
            startInterval,
            closingInterval,
        ));
        // log to console
        // ex. emitted buffers [4,5,6]...[9,10,11]
        const subscribe = bufferToggleInterval.subscribe((val) =>
            console.log("Emitted Buffer:", val),
        );
```