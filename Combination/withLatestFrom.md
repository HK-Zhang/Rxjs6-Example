# withLatestFrom

#### signature: `withLatestFrom(other: Observable, project: Function): Observable`

## Also provide the last value from another observable.

---

### Examples

##### Example 1: Latest value from quicker second source

```ts
import { interval, of } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

// emit every 5s
const source = interval(5000);
// emit every 1s
const secondSource = interval(1000);

const concateSources = map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
});

const example = source.pipe(
    withLatestFrom(secondSource)
    , concateSources);
/*
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
const subscribe = example.subscribe((val) => console.log(val));
```

##### Example 2: Slower second source

```ts
import { interval, of } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

// emit every 5s
const source = interval(5000);
// emit every 1s
const secondSource = interval(1000);
// withLatestFrom slower than source
const concateSources = map(([first, second]) => {
    return `Source (1s): ${first} Latest From (5s): ${second}`;
});

// both sources must emit at least 1 value (5s) before emitting
const example = secondSource.pipe(
    withLatestFrom(source)
    , concateSources);
/*
  "Source (1s): 4 Latest From (5s): 0"
  "Source (1s): 5 Latest From (5s): 0"
  "Source (1s): 6 Latest From (5s): 0"
  ...
*/
const subscribe = example.subscribe((val) => console.log(val));
```

##### Example 3

```ts
import { interval, of } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

// emit value every 3s
const source = of("a", "b", "c");
const secondSource = interval(3000);
const getSecondSource = map(([f, s]) => s);

const combindSource = secondSource.pipe(
    withLatestFrom(source)
    , getSecondSource);

const result = combindSource.subscribe((x) => console.log(x));

/*
c
c
c
c
...
*/
```