# mergeMap

#### signature: `mergeMap(project: function: Observable, resultSelector: function: any, concurrent: number): Observable`

## Map to observable, emit values.

This operator is best used when you wish to flatten an inner observable but want
to manually control the number of inner subscriptions.

### Examples

##### Example 1: switchMap with observable

```ts
import { interval, of, timer } from "rxjs";
import { map, mapTo, mergeMap, switchMap, take } from "rxjs/operators";

        const letters = of("a", "b", "c");

        const mapping = (x) => map((i) => x);

        const merge = switchMap((x) => interval(5000).pipe(
            mapping(x),
            take(5)));

        const result = letters.pipe(merge);

        result.subscribe(console.log);

        // => c ,c ,c ...
```

##### Example 2: mergeMap with observable

```ts
import { interval, of, timer } from "rxjs";
import { map, mapTo, mergeMap, switchMap, take } from "rxjs/operators";

        const letters = of("a", "b", "c");

        const mapping = (x) => map((i) => x);

        const merge = mergeMap((x) => interval(5000).pipe(
            mapping(x),
            take(5)));

        const result = letters.pipe(merge);

        result.subscribe(console.log);

        // => a ,b ,c ...
```

##### Example 3: mergeMap with `resultSelector`

```ts
import { interval, of, timer } from "rxjs";
import { map, mapTo, mergeMap, switchMap, take } from "rxjs/operators";

        // emit value every 1s
        const letters = of("a", "b", "c");

        const mapping = (x) => map((i) => x + i.toString());

        const selector = (oV, iV, oI, iI) => {
            // console.log("innerValue", iV);
            return "inner" + iV;
        };

        const targetSource = (x) =>
            interval(1000).pipe(mapping(x), take(5));

        const merge = mergeMap(targetSource, selector, 2);

        const result = letters.pipe(merge);
        result.subscribe(console.log);

        // => innera0, innerb0 ... innera4, innerb4, innerc0, innerc1 ...
```

##### Example 4: mergeMap with concurrent value

```ts
import { interval, of, timer } from "rxjs";
import { map, mapTo, mergeMap, switchMap, take } from "rxjs/operators";

        // emit value every 1s
        const source = interval(1000);

        const example = source.pipe(mergeMap(
            // project
            (val) => interval(5000).pipe(take(2)),
            // resultSelector
            (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
            // concurrent
            2));
        /*
                Output:
                [0, 0, 0, 0] <--1st inner observable
                [1, 1, 0, 0] <--2nd inner observable
                [0, 0, 1, 1] <--1st inner observable
                [1, 1, 1, 1] <--2nd inner observable
                [2, 2, 0, 0] <--3rd inner observable
                [3, 3, 0, 0] <--4th inner observable
        */
        const subscribe = example.subscribe(console.log);
```