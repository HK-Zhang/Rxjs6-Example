# windowToggle

#### signature: `windowToggle(openings: Observable, closingSelector: function(value): Observable): Observable`

## Collect and emit observable of values from source between opening and closing emission.

### Examples

##### Example 1: Toggle window at increasing interval

```ts
import { interval, timer } from "rxjs";
import { mergeAll, tap, windowToggle} from "rxjs/operators";

// emit immediately then every 1s
const source = timer(0, 1000);
// toggle window on every 5
const toggle = interval(5000);

const toggleWindow = () => windowToggle(toggle, (val) => {
    // console.log("N" + val);
    return interval(val * 1000);
    // return Observable.interval(5 * 1000);
});

const example = source.pipe(
    // turn window on every 5s
    toggleWindow()
    , tap(() => console.log("NEW WINDOW!")));

const subscribeTwo = example.pipe(
    // window emits nested observable
    mergeAll())
    .subscribe(console.log);
            /*
            output:
            "NEW WINDOW!"
            5
            "NEW WINDOW!"
            10
            11
            "NEW WINDOW!"
            15
            16
            "NEW WINDOW!"
            20
            21
            22
          */
```