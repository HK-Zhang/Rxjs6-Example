# exhaustMap

#### signature: `exhaustMap(project: function, resultSelector: function): Observable`

## Map to inner observable, ignore other values until that observable completes.

### Examples

##### Example 1: exhaustMap with interval

```ts
import { interval, merge, of } from "rxjs";
import { delay, exhaustMap, take, tap } from "rxjs/operators";

    const interval$ = interval(1000);
    const interval2 = interval(500);
    const delayedInterval = interval$.pipe(
      delay(10),
      take(4),
    );

    const exhaustSub = merge(
      // delay 10ms, then start interval emitting 4 values
      delayedInterval,
      // emit immediately
      of(true),
    )
      .pipe(
        // .do(console.log)
        /*
             *  The first emitted value (of(true)) will be mapped
             *  to an interval observable emitting 1 value every
             *  second, completing after 5.
             *  Because the emissions from the delayed interval
             *  fall while this observable is still active they will be ignored.
             *
             *  Contrast this with concatMap which would queue,
             *  switchMap which would switch to a new inner observable each emission,
             *  and mergeMap which would maintain a new subscription for each emitted value.
             */
        exhaustMap((_) => interval2.pipe(take(10))),
      )
      // .switchMap((_) => interval2.take(10))
      // .mergeMap((_) => interval2.take(10))
      // output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
      .subscribe(console.log);
```

##### Example 2: Another exhaustMap with interval

```ts
import { interval, merge, of } from "rxjs";
import { delay, exhaustMap, take, tap } from "rxjs/operators";

    const firstInterval = interval(1000).pipe(take(10));
    const secondInterval = interval(1000).pipe(take(3));

    const exhaustSub = firstInterval
      .pipe(
        tap(i => console.log(`Emission of first interval: ${i}`)),
        exhaustMap(f => {
          console.log(`Emission Corrected of first interval: ${f}`);
          return secondInterval;
        }),
      )
      /*
              Output:
Emission of first interval: 0
Emission Corrected of first interval: 0
0
Emission of first interval: 1
1
Emission of first interval: 2
2
Emission of first interval: 3
Emission Corrected of first interval: 3
0
Emission of first interval: 4
1
Subscriber.ts:270
Emission of first interval: 5
2
Subscriber.ts:270
Emission of first interval: 6
Emission Corrected of first interval: 6
0
Emission of first interval: 7
1
Emission of first interval: 8
2
Emission of first interval: 9
Emission Corrected of first interval: 9
0
1
2

          */
      .subscribe(console.log);
```