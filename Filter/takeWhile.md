# takeWhile

#### signature: `takeWhile(predicate: function(value, index): boolean): Observable`

## Emit values until provided expression is false.


### Examples

##### Example 1: Take values under limit


```js
import { Observable, of, zip } from "rxjs";
import { filter, takeWhile } from "rxjs/operators";

// emit 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
// allow values until value from source is greater than 4, then complete
const takeLE4 = takeWhile((val) => val <= 4);

const example = source.pipe(takeLE4);
// output: 1,2,3,4
const subscribe = example.subscribe((val) => console.log(val));
```

##### Example 2: Difference between takeWhile() and filter()


```js
// emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
const source = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

// allow values until value from source equals 3, then complete
const take3 = takeWhile((it) => it === 3);

// output:
// takeWhile 3
// takeWhile 3
// takeWhile 3
source.pipe(take3)
    .subscribe((val) => console.log("takeWhile", val));

const filter3 = filter((it) => it === 3);

// output:
// filter 3
// filter 3
// filter 3
// filter 3
// filter 3
// filter 3

source.pipe(filter3).subscribe((val) => console.log("filter", val));
```
