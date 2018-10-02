# buffer

#### signature: `buffer(closingNotifier: Observable): Observable`

## Collect output values until provided observable emits, emit as array.

### Examples

##### Example 1: 

```ts
import { interval } from "rxjs";
import { buffer } from "rxjs/operators";

        // Create an observable that emits a value every second
        const myInterval = interval(1000);

        const bufferBy = interval(5000);

        const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
        // Print values to console
        // ex. output: [0,1,2,3] ... [4,5,6,7,8]
        const subscribe = myBufferedInterval.subscribe((val) =>
            console.log(" Buffered Values:", val),
```