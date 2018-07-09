# filter

#### signature: `filter(select: Function, thisArg: any): Observable`

## Emit values that pass the provided condition.

---

### Examples

##### Example 1: filter for even numbers

```ts
import { from, interval } from "rxjs";
import { filter } from "rxjs/operators";

// emit (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);
// filter out non-even numbers
const evenOnly = filter((num: number) => num % 2 === 0);
const example = source.pipe(evenOnly);
// output: "Even number: 2", "Even number: 4"
const subscribe = example.subscribe((val) => console.log(`Even number: ${val}`));
```

##### Example 2: filter objects based on property

```ts
import { from, interval } from "rxjs";
import { filter } from "rxjs/operators";

// emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source = from([
    { name: "Joe", age: 31 },
    { name: "Bob", age: 25 },
]);
// filter out people with age under 30
const ageAbove30 = filter((person: any) => person.age >= 30);
const example = source.pipe(ageAbove30);
// output: "Over 30: Joe"
const subscribe = example.subscribe((val) => console.log(`Over 30: ${val.name}`));
```

##### Example 3: filter for number greater than specified value

```ts
import { from, interval } from "rxjs";
import { filter } from "rxjs/operators";

// emit every second
const source = interval(1000);
// filter out all values until interval is greater than 5
const aboveFive = filter((num) => num > 5);
const example = source.pipe(aboveFive);
/*
  "Number greater than 5: 6"
  "Number greater than 5: 7"
  "Number greater than 5: 8"
  "Number greater than 5: 9"
*/
const subscribe = example.subscribe((val) =>
    console.log(`Number greater than 5: ${val}`),
);
```