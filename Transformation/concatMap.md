# concatMap

#### signature: `concatMap(project: function, resultSelector: function): Observable`

## Map values to inner observable, subscribe and emit in order.

### Examples

##### Example 1: Demonstrating the difference between `concatMap` and [`mergeMap`](./mergemap.md)

```ts
import { of } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";


        const concatMapSub = of(2000, 1000)
            .pipe(concatMap((v) => of(v).pipe(delay(v))))
            // concatMap: 2000, concatMap: 1000
            .subscribe((v) => console.log("concatMap:", v));

        const mergeMapSub = of(2000, 1000)
            .pipe(mergeMap((v) => of(v).pipe(delay(v))))
            // mergeMap: 1000, mergeMap: 2000
            .subscribe((v) => console.log("mergeMap:", v));
```

##### Example 2: Supplying a projection function

```ts
import { of } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";

        // emit 'Hello' and 'Goodbye'
        const source = of("Hello", "Goodbye");
        // map value from source into inner observable, when complete emit result and move to next
        const example = source.pipe(concatMap((val) => of(`${val} World!`)));
        // output: 'Example One: 'Hello World', Example One: 'Goodbye World'
        const subscribe = example.subscribe((val) => console.log("Example One:", val));
```