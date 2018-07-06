# sample

#### signature: `sample(sampler: Observable): Observable`

## Sample from source when provided observable emits.

### Examples

##### Example 1: Sample source every 2 seconds

```ts
import { from, interval, zip } from "rxjs";
import { sample } from "rxjs/operators";

// emit value every 1s
const source = interval(1000);
// sample last emitted value from source every 2s
const sampling = sample(interval(2000));
const example = source.pipe(sampling);
// output: 2..4..6..8..
const subscribe = example.subscribe((val) => console.log(val));
```

##### Example 2: Sample source when interval emits

```ts
import { from, interval, zip } from "rxjs";
import { sample } from "rxjs/operators";

const source = zip(
    // emit 'Joe', 'Frank' and 'Bob' in sequence
    from(["Joe", "Frank", "Bob"]),
    // emit value every 2s
    interval(2000),
);
// sample last emitted value from source every 2.5s
const sampling = sample(interval(2500));
const example = source.pipe(sampling);
// output: ["Joe", 0]...["Frank", 1]...........
const subscribe = example.subscribe((val) => console.log(val));
```