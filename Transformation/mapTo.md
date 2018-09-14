# mapTo

#### signature: `mapTo(value: any): Observable`

## Map emissions to constant value.

### Examples

##### Example 1: Map every emission to string

```ts
// RxJS v6+
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

//emit value every two seconds
const source = interval(2000);
//map all emissions to one value
const example = source.pipe(mapTo('HELLO WORLD!'));
//output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe = example.subscribe(console.log);
```