# scan

#### signature: `scan(accumulator: function, seed: any): Observable`

## Reduce over time.

### Examples

##### Example 1: Sum over time

```ts
import { interval, Subject } from "rxjs";
import { distinctUntilChanged, map, scan, startWith } from "rxjs/operators";

const subject = new Subject<number>();
const accumulate = scan((acc: number, curr: number) => acc + curr);
// basic scan example, sum over time starting with zero
const example = subject.pipe(startWith(0), accumulate);
// log accumulated values
const subscribe = example.subscribe((val) =>
    console.log("Accumulated total:", val),
);
// next values into subject, adding to the current sum
subject.next(1); // 1
subject.next(2); // 3
subject.next(3); // 6
```

##### Example 2: Accumulating an object

```ts
import { interval, Subject } from "rxjs";
import { distinctUntilChanged, map, scan, startWith } from "rxjs/operators";


const subject = new Subject();
const concat = scan((acc, curr) => Object.assign({}, acc, curr), {});
// scan example building an object over time
const example = subject.pipe(concat);
// log accumulated values
const subscribe = example.subscribe((val) =>
    console.log("Accumulated object:", val),
);
// next values into subject, adding properties to object
subject.next({ name: "Joe" }); // {name: 'Joe'}
subject.next({ age: 30 }); // {name: 'Joe', age: 30}
subject.next({ favoriteLanguage: "JavaScript" }); // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
```

##### Example 3: Emitting random values from the accumulated array.

```ts
import { interval, Subject } from "rxjs";
import { distinctUntilChanged, map, scan, startWith } from "rxjs/operators";


// Accumulate values in an array, emit random values from this array.
const concat = scan<any>((a, c) => a.concat(c), []);
const random = map((r: any) => r[Math.floor(Math.random() * r.length)]);

const scanObs = interval(1000).pipe(
    concat
    , random
    , distinctUntilChanged())
    .subscribe(console.log);

// 0, 1, 0, 3, 4, 3, 1
```