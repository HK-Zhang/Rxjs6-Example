# timeout

#### signature: `timeout(due: number, scheduler: Scheduler): Observable`

## Error if no value is emitted before specified duration

### Examples

##### Example 1: Timeout after 2.5 seconds

```ts
import { of } from "rxjs";
import { catchError, concatMap, delay, timeout } from "rxjs/operators";

// simulate request
function makeRequest(timeToDelay) {
  return of('Request Complete!').pipe(delay(timeToDelay));
}

    const mimicRequest = (duration) =>
      this.makeRequest(duration).pipe(
        timeout(2500),
        catchError(() => of(`Request timed out after: ${duration}`)),
      );

    of(4000, 3000, 2000)
      .pipe(concatMap((duration) => mimicRequest(duration)))
      /*
            *  "Request timed out after: 4000"
            *  "Request timed out after: 3000"
            *  "Request Complete!"
            */
      .subscribe(console.log);
```