# skipWhile

#### signature: `skipWhile(predicate: Function): Observable`

## Skip emitted values from source until provided expression is false.

### Examples

##### Example 1: Skip while values below threshold

```js
import { interval } from "rxjs";
import { skipWhile } from "rxjs/operators";

// emit every 1s
const source = interval(1000);
// skip emitted values from source while value is less than 5
const skipL5 = skipWhile((val) => val < 5);
const example = source.pipe(skipL5);
// output: 5...6...7...8........
const subscribe = example.subscribe(console.log);
```