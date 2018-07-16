# skipUntil

####signature: `skipUntil(the: Observable): Observable`

## Skip emitted values from source until provided observable emits.

### Examples

##### Example 1: Skip until observable emits


```js
import { interval, timer } from "rxjs";
import { skipUntil } from "rxjs/operators";


// emit every 1s
const source = interval(1000);
// skip emitted values from source until inner observable emits (6s)
const skip5sec = skipUntil(timer(6000));
const example = source.pipe(skip5sec);
// output: 5...6...7...8........
const subscribe = example.subscribe(console.log);
```
