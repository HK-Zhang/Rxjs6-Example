import { interval } from "rxjs";
import { combineAll, map, take } from "rxjs/operators";



export class CombineAllPoc {

    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // emit every 1s, take 2
        const source = interval(1000).pipe(take(2));

        const mapping = (val) => map((i) => `Result (${val}): ${i}`);

        const buildStream = (val) => interval(1000).pipe(
            mapping(val)
            , take(5));

        const shapping = map((val) => buildStream(val));
        // map each emitted value from source to interval observable that takes 5 values
        const example = source.pipe(shapping);
        /*
          2 values from source will map to 2 (inner) interval observables that emit every 1s
          combineAll uses combineLatest strategy, emitting the last value from each
          whenever either observable emits a value
        */
        const combined = example.pipe(combineAll());
        /*
          output:
          ["Result (0): 0", "Result (1): 0"]
          ["Result (0): 1", "Result (1): 0"]
          ["Result (0): 1", "Result (1): 1"]
          ["Result (0): 2", "Result (1): 1"]
          ["Result (0): 2", "Result (1): 2"]
          ["Result (0): 3", "Result (1): 2"]
          ["Result (0): 3", "Result (1): 3"]
          ["Result (0): 4", "Result (1): 3"]
          ["Result (0): 4", "Result (1): 4"]
        */
        const subscribe = combined.subscribe(console.log);
    }


}
