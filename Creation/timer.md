# timer

#### signature: `timer(initialDelay: number | Date, period: number, scheduler: Scheduler): Observable`

## After given duration, emit numbers in sequence every specified duration.

### Examples

##### Example 1: timer emits 1 value then completes

```ts
import { timer } from "rxjs";

//emit 0 after 1 second then complete, since no second argument is supplied
const source = timer(1000);
//output: 0
const subscribe = source.subscribe(console.log);
```

##### Example 2: timer emits after 1 second, then every 2 seconds

```ts
import { timer } from "rxjs";

/*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
const source = timer(1000, 2000);
//output: 0,1,2,3,4,5......
const subscribe = source.subscribe(console.log);
```