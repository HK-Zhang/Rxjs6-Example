# zip

#### signature: `zip(observables: *): Observable`

### Description

###### TL;DR: After all observables emit, emit values as an array

The **zip** operator will subscribe to all inner observables, waiting for each
to emit a value. Once this occurs, all values with the corresponding index will
be emitted. This will continue until at least one inner observable completes.

---

### Examples

##### Example 1: zip multiple observables emitting at alternate intervals

```ts
import { interval, of, range, zip } from "rxjs";
import { delay, take } from "rxjs/operators";

const sourceOne = of("Hello");
const sourceTwo = of("World!");
const sourceThree = of("Goodbye");
const sourceFour = of("World!");
// wait until all observables have emitted a value then emit all as an array
const example = zip(
    sourceOne,
    sourceTwo.pipe(delay(1000)),
    sourceThree.pipe(delay(2000)),
    sourceFour.pipe(delay(3000)),
);
// output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe = example.subscribe(console.log);
```

##### Example 2: zip when 1 observable completes

```ts
import { interval, of, range, zip } from "rxjs";
import { delay, take } from "rxjs/operators";

// emit every 1s
const v = interval(1000);
// when one observable completes no more values will be emitted
const example = zip(v, v.pipe(take(2)));
// output: [0,0]...[1,1]
const subscribe = example.subscribe(console.log);
```

##### Example 3

```ts
import { interval, of, range, zip } from "rxjs";
import { delay, take } from "rxjs/operators";

const source = of("src");
const example = zip(source, range(1, 4));
const subscribe = example.subscribe(console.log);
// ["src", 1]
```

##### Example 4

```ts
const source = interval(1000);
const example = zip(source, range(1, 4));
const subscribe = example.subscribe(console.log);
// [0, 1]
// [1, 2]
// [2, 3]
// [3, 4]
```