# pairwise

#### signature: `pairwise(): Observable<Array>`

## Emit the previous and current values as an array.

### Examples

##### Example 1:

```ts
import { interval } from "rxjs";
import { pairwise } from "rxjs/operators";

interval(1000).pipe(pairwise())
            .subscribe(console.log); // pair[1] - pair[0]
        // => [0, 1] [1, 2] ...
```