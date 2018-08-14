# shareReplay

#### signature: `shareReplay(bufferSize?: number, windowTime?: number, scheduler?I IScheduler): Observable`

## Share source and replay specified number of emissions on subscription.

### Examples

##### Example 1: Multiple subscribers sharing source

```ts
import { Subject } from "rxjs";
import { pluck, shareReplay, tap } from "rxjs/operators";


// simulate url change with subject
const routeEnd = new Subject<{data: any, url: string}>();
// grab url and share with subscribers
const lastUrl = routeEnd.pipe(
  tap(_ => console.log('executed')),
  pluck('url'),
  // defaults to all values so we set it to just keep and replay last one
  shareReplay(1)
);
// requires initial subscription
const initialSubscriber = lastUrl.subscribe(console.log)
// simulate route change
// logged: 'executed', 'my-path'
routeEnd.next({data: {}, url: 'my-path'});
// logged: 'my-path'
const lateSubscriber = lastUrl.subscribe(console.log);
```