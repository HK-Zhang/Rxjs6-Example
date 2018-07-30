# of / just

#### signature: `of(...values, scheduler: Scheduler): Observable`

## Emit variable amount of values in a sequence.

### Examples

##### Example 1: Emitting a sequence of numbers

```ts
import { of } from 'rxjs';
//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe = source.subscribe(val => console.log(val));
```

##### Example 2: Emitting an object, array, and function

```ts
import { of } from 'rxjs';
//emits values of any type
const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
  return 'Hello';
});
//output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
const subscribe = source.subscribe(val => console.log(val));
```