# takeUntil

#### signature: `takeUntil(notifier: Observable): Observable`

## Emit values until provided observable emits.

### Examples

##### Example 1: Take values until timer emits

```js
import { interval, Observable, timer } from "rxjs";
import { filter, map, scan, takeUntil, withLatestFrom } from "rxjs/operators";

// emit value every 1s
const source = interval(1000);
// after 5 seconds, emit value
const after5sec = takeUntil(timer(5000));
// when timer emits after 5s, complete source
const example = source.pipe(after5sec);
// output: 0,1,2,3
const subscribe = example.subscribe((val) => console.log(val));
```

##### Example 2: Take the first 5 even numbers

```js
import { interval, Observable, timer } from "rxjs";
import { filter, map, scan, takeUntil, withLatestFrom } from "rxjs/operators";

// emit value every 1s
const source = interval(1000);
// is number even?
const filterEven = filter((val: number) => val % 2 === 0);
// only allow values that are even
const evenSource = source.pipe(filterEven);

// keep a running total of the number of even numbers out
const accumulate = scan((acc, _) => acc + 1, 0);
const evenNumberCount = evenSource.pipe(accumulate);

// do not emit until 5 even numbers have been emitted
const filterGE = (baseline) => filter((val) => val > baseline);
const fiveEvenNumbers = evenNumberCount.pipe(filterGE(5));

const mapping = map(([val, count]) => `Even number (${count}) : ${val}`);
const example = evenSource.pipe(
    // also give me the current even number count for display
    withLatestFrom(evenNumberCount)
    , mapping
    // when five even numbers have been emitted, complete source observable
    , takeUntil(fiveEvenNumbers));
/*
    Even number (1) : 0,
    Even number (2) : 2
    Even number (3) : 4
    Even number (4) : 6
    Even number (5) : 8
*/
const subscribe = example.subscribe((val) => console.log(val));
```