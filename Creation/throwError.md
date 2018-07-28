# throw

#### signature: `throw(error: any, scheduler: Scheduler): Observable`

## Emit error on subscription.

### Examples

##### Example 1: Throw error on subscription

```ts
import { throwError } from 'rxjs';

// emits an error with specified value on subscription
const source = throwError("This is an error!");
// output: 'Error: This is an error!'
const subscribe = source.subscribe({
    complete: () => console.log("Complete!"),
    error: (val) => console.log(`Error: ${val}`),
    next: console.log,
});
```