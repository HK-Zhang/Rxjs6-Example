# reduce

#### signature: `reduce(accumulator: function, seed: any): Observable`

## Reduces the values from source observable to a single value that's emitted when the source completes.

### Examples

##### Example 1: Sum a stream of numbers

```ts
import { of } from "rxjs";
import { reduce, scan } from "rxjs/operators";

const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, val) => acc + val));
const example2 = source.pipe(scan((acc, val) => acc + val));
// output: Sum: 10'
const subscribe = example.subscribe((val) => console.log("Sum:", val));
const subscribe2 = example2.subscribe((val) =>
    console.log("Accumulated total:", val),
);

        // => Accumulated total: 1
        // Accumulated total: 3
        // Accumulated total: 6
        // Accumulated total: 10
```