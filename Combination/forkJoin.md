# forkJoin

#### signature: `forkJoin(...args, selector : function): Observable`

## When all observables complete, emit the last emitted value from each.

---

### Examples

##### Example 1: Observables completing after different durations

```ts
import { forkJoin, interval, timer } from "rxjs";
import { mapTo } from "rxjs/operators";

const getPostOne$ = timer(1000).pipe(mapTo("id: 1"));
const getPostTwo$ = timer(2000).pipe(mapTo("name: hk"));
// Runs all observable sequences in parallel and collect their last elements.
forkJoin(getPostOne$, getPostTwo$).subscribe(console.log);
// => ["id: 1", "name: hk"]
```

##### Example 2: incorrect case of forkJoin

```ts
import { forkJoin, interval, timer } from "rxjs";
import { mapTo } from "rxjs/operators";

const getPostOne$ = interval(1000).pipe(mapTo("id: 1"));
const getPostTwo$ = interval(2000).pipe(mapTo("name: hk"));
// Runs all observable sequences in parallel and collect their last elements.
forkJoin(getPostOne$, getPostTwo$).subscribe(console.log);
// the execution never ends due to interval will not emit complete event.
```