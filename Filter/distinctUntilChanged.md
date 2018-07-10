# distinctUntilChanged

#### signature: `distinctUntilChanged(compare: function): Observable`

## Only emit when the current value is different than the last.

---

:bulb: distinctUntilChanged uses `===` comparison by default, object references
must match!

---

### Examples

##### Example 1: distinctUntilChanged with basic values

```ts
import { from, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

//only output distinct values, based on the last emitted value
const myArrayWithDuplicatesInARow = from([1, 1, 2, 2, 3, 1, 2, 3]);

const distinctSub = myArrayWithDuplicatesInARow
  .pipe(distinctUntilChanged())
  //output: 1,2,3,1,2,3
  .subscribe(val => console.log('DISTINCT SUB:', val));

const nonDistinctSub = myArrayWithDuplicatesInARow
  //output: 1,1,2,2,3,1,2,3
  .subscribe(val => console.log('NON DISTINCT SUB:', val));
```

##### Example 2: distinctUntilChanged with objects

```ts
import { from, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const sampleObject = { name: 'Test' };
//Objects must be same reference
const myArrayWithDuplicateObjects = from([
  sampleObject,
  sampleObject,
  sampleObject
]);
//only out distinct objects, based on last emitted value
const nonDistinctObjects = myArrayWithDuplicateObjects
  .pipe(distinctUntilChanged())
  //output: 'DISTINCT OBJECTS: {name: 'Test'}
  .subscribe(val => console.log('DISTINCT OBJECTS:', val));
```