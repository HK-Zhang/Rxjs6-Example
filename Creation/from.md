# from

#### signature: `from(ish: ObservableInput, mapFn: function, thisArg: any, scheduler: Scheduler): Observable`

## Turn an array, promise, or iterable into an observable.

### Examples

##### Example 1: Observable from array

```ts
// RxJS v6+
import { from } from 'rxjs';

// emit array as a sequence of values
const arraySource = from([1, 2, 3, 4, 5]);
// output: 1,2,3,4,5
const subscribe = arraySource.subscribe(console.log);
```

##### Example 2: Observable from promise

```ts
import { from } from 'rxjs';

// emit result of promise
const promiseSource = from(
    new Promise((resolve) => resolve("Hello World!")),
);
// output: 'Hello World'
const subscribe = promiseSource.subscribe(console.log);
```

##### Example 3: Observable from collection

```ts
import { from } from 'rxjs';

// emit string as a sequence
const source = from("Hello World");
// output: 'H','e','l','l','o',' ','W','o','r','l','d'
const subscribe = source.subscribe(console.log);
```

##### Example 4: Observable from string

```ts
import { from } from 'rxjs';

const map: { [key: number]: string; length: number; } = { length: 0 };
map[0] = "Hi";
map[1] = "Bye";
map.length = 2;

const mapSource = from(map);
// output: [1, 'Hi'], [2, 'Bye']
const subscribe = mapSource.subscribe(console.log);
```