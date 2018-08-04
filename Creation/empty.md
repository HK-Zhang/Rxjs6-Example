# empty

#### signature: `empty(scheduler: Scheduler): Observable`

## Observable that immediately completes.

### Examples

##### Example 1: empty immediately completes

```ts
import { empty, Observable } from "rxjs";

// create observable that immediately completes
const example: Observable<{}> = empty();
// output: 'Complete!'
const subscribe = example.subscribe({
    complete: () => console.log("Complete!"),
    next: () => console.log("Next"),
});
```
