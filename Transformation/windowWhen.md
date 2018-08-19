# windowWhen

#### signature: `windowWhen(closingSelector: function(): Observable): Observable`

## Close window at provided time frame emitting observable of collected values from source.

### Examples

##### Example 1: Open and close window at interval

```ts
import { interval, timer } from "rxjs";
import { mergeAll, tap, windowWhen } from "rxjs/operators";

// emit immediately then every 1s
const source = timer(0, 1000);
const example = source.pipe(
    // close window every 5s and emit observable of collected values from source
    windowWhen(() => interval(5000))
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
            3
            4
            "NEW WINDOW!"
            5
            6
            7
            8
            9
          */
```