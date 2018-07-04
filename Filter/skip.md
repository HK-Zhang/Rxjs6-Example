# skip

#### signature: `skip(the: Number): Observable`

## Skip the provided number of emitted values.

### Why use `skip`?

Skip allows you to ignore the first x emissions from the source. Generally
`skip` is used when you have an observable that always emits certain values on
subscription that you wish to ignore. Perhaps those first few aren't needed or
you are subscribing to a `Replay` or `BehaviorSubject` and do not need to act on
the initial values. Reach for `skip` if you are only concerned about later
emissions.

### Examples

##### Example 1: Skipping values before emission


```ts
import { from, interval } from "rxjs";
import { filter, skip } from "rxjs/operators";

//emit every 1s
const source = interval(1000);
//skip the first 5 emitted values
const example = source.pipe(skip(5));
//output: 5...6...7...8........
const subscribe = example.subscribe(val => console.log(val));
```

#### Example 2: Short hand for a specific filter use case


```ts
import { from, interval } from "rxjs";
import { filter, skip } from "rxjs/operators";

const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 3,4,5...
const skipObs = numArrayObs.pipe(skip(2))
    .subscribe(console.log);

// 3,4,5...
const skipFirstOne = filter((val, index) => index > 1);
const filterObs = numArrayObs.pipe(skipFirstOne)
    .subscribe(console.log);

// Same output!

//Same output!
```