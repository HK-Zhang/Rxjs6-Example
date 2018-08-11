# defaultIfEmpty

#### signature: `defaultIfEmpty(defaultValue: any): Observable`

## Emit given value if nothing is emitted before completion.

### Examples

##### Example 1: Default for empty value

```ts
import { empty, of } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";


const empty$ = of();
// emit 'Observable.of() Empty!' when empty, else any values from source
const setDefault = defaultIfEmpty("Observable.of() Empty!");
const exampleOne = empty$.pipe(setDefault);
// output: 'Observable.of() Empty!'
const subscribe = exampleOne.subscribe(console.log);

```

##### Example 2: Default for Observable.empty

```ts
import { empty, of } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";


// empty observable
const empty$ = empty();
// emit 'Observable.empty()!' when empty, else any values from source
const setDefault = defaultIfEmpty("Observable.empty()!");
const example = empty$.pipe(setDefault);
// output: 'Observable.empty()!'
const subscribe = example.subscribe(console.log);
```