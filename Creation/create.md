# create

#### signature: `create(subscribe: function)`

## Create an observable with given subscription function.

### Examples

##### Example 1: Observable that emits multiple values

```ts
// RxJS v6+
import { Observable } from 'rxjs';
/*
  Create an observable that emits 'Hello' and 'World' on  
  subscription.
*/
const hello = Observable.create(function(observer) {
  observer.next('Hello');
  observer.next('World');
});

//output: 'Hello'...'World'
const subscribe = hello.subscribe(val => console.log(val));
```

##### Example 2: Observable that emits even numbers on timer

```ts
import { Observable } from 'rxjs';

/*
  Increment value every 1s, emit even numbers.
*/
const evenNumbers = Observable.create(function(observer) {
  let value = 0;
  const interval = setInterval(() => {
    if (value % 2 === 0) {
      observer.next(value);
    }
    value++;
  }, 1000);

  return () => clearInterval(interval);
});
//output: 0...2...4...6...8
const subscribe = evenNumbers.subscribe(val => console.log(val));
//unsubscribe after 10 seconds
setTimeout(() => {
  subscribe.unsubscribe();
}, 10000);
```