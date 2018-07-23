# combineLatest

#### signature: `combineLatest(observables: ...Observable, project: function): Observable`

## When any observable emits a value, emit the latest value from each.

---

### Examples

##### Example 1: Combining events from 2 interval

```ts
import { combineLatest, interval } from "rxjs";

const intervalOne$ = interval(1000);
const intervalTwo$ = interval(2000);

combineLatest(
    intervalOne$,
    intervalTwo$,
).subscribe(console.log);

// => [0, 0] [1, 0] [2, 0] [2, 1] [3, 1] [4, 1]
```