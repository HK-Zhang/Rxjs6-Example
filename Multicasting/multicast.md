# multicast

#### signature: `multicast(selector: Function): Observable`

## Share source utilizing the provided Subject.

### Examples

##### Example 1: multicast with standard Subject

```ts
import { ConnectableObservable, interval, Subject } from "rxjs";
import { mapTo, multicast, take, tap } from "rxjs/operators";

// emit every 2 seconds, take 5
const source = interval(2000).pipe(take(5));

const example = source.pipe(
    // since we are multicasting below, side effects will be executed once
    tap(() => console.log("Side Effect #1"))
    , mapTo("Result!"));

// subscribe subject to source upon connect()
const multi = example.pipe(multicast(() => new Subject()));
/*
  subscribers will share source
  output:
  "Side Effect #1"
  "Result!"
  "Result!"
  ...
*/
const subscriberOne = multi.subscribe(console.log);
const subscriberTwo = multi.subscribe(console.log);
// subscribe subject to source
(multi as ConnectableObservable<any>).connect();
```