# concat

#### signature: `concat(observables: ...*): Observable`

## Subscribe to observables in order as previous completes, emit values.

### Examples

##### Example 1: concat 2 basic observables

```ts
import { concat, interval, timer } from "rxjs";
import { mapTo } from "rxjs/operators";

const getPostOne$ = timer(3000).pipe(mapTo("{ id: 1 }"));
const getPostTwo$ = timer(1000).pipe(mapTo("{ id: 2 }"));

concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));

        // => { id: 1 }
        // { id: 2 }
```

##### Example 2: concat with source that does not complete

```ts
import { concat, interval, timer } from "rxjs";
import { mapTo } from "rxjs/operators";

const getPostOne$ = interval(3000).pipe(mapTo("{ id: 1 }"));
const getPostTwo$ = interval(1000).pipe(mapTo("{ id: 2 }"));

concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));

        // => { id: 1 }
        // { id: 1 }
        // ...
        // { id: 1 }
        // ...
```