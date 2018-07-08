# first

#### signature: `first(predicate: function, select: function)`

## Emit the first value or first to pass provided expression.

---

### Examples

##### Example 1: First value from sequence

```ts
import { from } from "rxjs";
import { first, map } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
//no arguments, emit first value
const example = source.pipe(first());
//output: "First value: 1"
const subscribe = example.subscribe(val => console.log(`First value: ${val}`));
```

##### Example 2: First value to pass predicate

```ts
import { from } from "rxjs";
import { first, map } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
// emit first item to pass test
const selectFirst5 = first((num) => num === 5);
const example = source.pipe(selectFirst5);
// output: "First to pass test: 5"
const subscribe = example.subscribe((val) =>
    console.log(`First to pass test: ${val}`),
);
```

##### Example 3: Using optional projection function

```ts
import { from } from "rxjs";
import { first, map } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
// using optional projection function
const selectFirstEven = first<any>(
    (num) => num % 2 === 0,
    (result, index) => `First even: ${result} is at index: ${index}`,
);
const example = source.pipe(selectFirstEven);
// output: "First even: 2 at index: 1"
const subscribe = example.subscribe((val) => console.log(val));
```

##### Example 4: Utilizing default value

```ts
import { from } from "rxjs";
import { first, map } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
// no value will pass, emit default
const firstOver5 = first<any>((val) => val > 5, "Nothing");
const mapping = map((val) => `Value: ${val}`);
const example = source.pipe(firstOver5, mapping);
// output: 'Nothing'
const subscribe = example.subscribe((val) => console.log(val));
```