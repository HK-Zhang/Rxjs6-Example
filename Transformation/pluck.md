# pluck

#### signature: `pluck(properties: ...args): Observable`

## Select properties to emit.

### Examples

##### Example 1: Pluck object property

```ts
import { from } from "rxjs";
import { pluck } from "rxjs/operators";

const source = from([
    { name: "Joe", age: 30 },
    { name: "Sarah", age: 35 },
]);
// grab names
const example = source.pipe(pluck("name"));
// output: "Joe", "Sarah"
const subscribe = example.subscribe(console.log);
```

##### Example 2: Pluck nested properties

```ts
import { from } from "rxjs";
import { pluck } from "rxjs/operators";

const source = from([
    { name: "Joe", age: 30, job: { title: "Developer", language: "JavaScript" } },
    // will return undefined when no job is found
    { name: "Sarah", age: 35 },
]);
// grab title property under job
const example = source.pipe(pluck("job", "title"));
// output: "Developer" , undefined
const subscribe = example.subscribe(console.log);
```