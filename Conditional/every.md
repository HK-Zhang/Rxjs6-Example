# every

#### signature: `every(predicate: function, thisArg: any): Observable`

## If all values pass predicate before completion emit true, else false.

### Examples

##### Example 1: Some values false

```ts
import { of } from "rxjs";
import { every } from "rxjs/operators";

// emit 5 values
const source = of(1, 2, 3, 4, 5);

// is every value even?
const isEveryEven = every((val: number) => val % 2 === 0);
const example = source.pipe(isEveryEven);
// output: false
const subscribe = example.subscribe(console.log);
```

##### Example 2: All values true

```ts
import { of } from "rxjs";
import { every } from "rxjs/operators";

// emit 5 values
const allEvens = of(2, 4, 6, 8, 10);

// is every value even?
const isEveryEven = every((val: number) => val % 2 === 0);
const example = allEvens.pipe(isEveryEven);
// output: true
const subscribe = example.subscribe(console.log);
```