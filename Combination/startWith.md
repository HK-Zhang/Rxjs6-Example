# startWith

#### signature: `startWith(an: Values): Observable`

## Emit given value first.

### Examples

##### Example 1: startWith on number sequence

```ts
import { interval, of } from "rxjs";
import { scan, startWith } from "rxjs/operators";

// emit (1,2,3)
const source = of(1, 2, 3);
// start with 0
const example = source.pipe(startWith(0));
// output: 0,1,2,3
const subscribe = example.subscribe(console.log);
```

##### Example 2: startWith for initial scan value

```ts
import { interval, of } from "rxjs";
import { scan, startWith } from "rxjs/operators";

// emit ('World!', 'Goodbye', 'World!')
const source = of("World!", "Goodbye", "World!");
// start with 'Hello', concat current string to previous
const scanSource = scan((acc, curr) => `${acc} ${curr}`);

const example = source.pipe(
    startWith("Hello")
    , scanSource);
/*
  output:
  "Hello"
  "Hello World!"
  "Hello World! Goodbye"
  "Hello World! Goodbye World!"
*/
const subscribe = example.subscribe(console.log);
```

##### Example 3: startWith multiple values

```ts
import { interval, of } from "rxjs";
import { scan, startWith } from "rxjs/operators";

// emit values in sequence every 1s
const source = interval(1000);
// start with -3, -2, -1
const example = source.pipe(startWith(-3, -2, -1));
// output: -3, -2, -1, 0, 1, 2....
const subscribe = example.subscribe(console.log);
```