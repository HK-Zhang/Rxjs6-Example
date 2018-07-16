# last

#### signature: `last(predicate: function): Observable`

## Emit the last value emitted from source on completion, based on provided expression.

---

### Examples

##### Example 1: Last value in sequence

```ts
import { from } from "rxjs";
import { last } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
// no arguments, emit last value
const example = source.pipe(last());
// output: "Last value: 5"
const subscribe = example.subscribe((val) => console.log(`Last value: ${val}`));
```

##### Example 2: Last value to pass predicate

```ts
import { from } from "rxjs";
import { last } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
// emit last even number
const lastEven = last((num: number) => num % 2 === 0);
const exampleTwo = source.pipe(lastEven);
// output: "Last to pass test: 4"
const subscribeTwo = exampleTwo.subscribe((val) =>
    console.log(`Last to pass test: ${val}`),
);
```

##### Example 3: Last with result selector

```ts
import { from } from "rxjs";
import { last } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5, 4]);
// supply an option projection function for the second parameter
const lastOver4 = last<any>(
    (v) => v > 4,
    (v) => `The highest emitted number was ${v}`,
);
const exampleTwo = source.pipe(lastOver4);
// output: 'The highest emitted number was 5'
const subscribeTwo = exampleTwo.subscribe(console.log);
```
