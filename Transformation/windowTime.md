# windowTime

#### signature: `windowTime(windowTimeSpan: number, windowCreationInterval: number, scheduler: Scheduler): Observable`

## Observable of values collected from source for each provided time span.

### Examples

##### Example 1: Open new window every specified duration

```ts
import { timer } from "rxjs";
import { mergeAll, tap, windowTime} from "rxjs/operators";

// emit immediately then every 1s
const source = timer(0, 1000);
const example = source.pipe(
    // start new window every 3s
    windowTime(3000)
    , tap(() => console.log("NEW WINDOW!")));

const subscribeTwo = example.pipe(
    // window emits nested observable
    mergeAll())
    .subscribe(console.log);
            /*
            output:
            "NEW WINDOW!"
            0
            1
            2
            "NEW WINDOW!"
            3
            4
            5
          */
```