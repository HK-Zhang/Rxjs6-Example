var Promise = require("promise");

import { interval, Observable, of } from "rxjs";
import { delay, map, merge, mergeAll, take } from "rxjs/operators";

export class MergeAllPoc {

    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        const myPromise = (val) =>
            new Promise((resolve) => setTimeout(() => resolve(`Result: ${val}`), 2000));
        // emit 1,2,3
        const source = of(1, 2, 3, 4, 5, 6, 7);

        // map each value to promise
        const mapPromise = map((val) => myPromise(val));

        const example = source.pipe(
            mapPromise
            , mergeAll());

        /*
          output:
          "Result: 1"
          "Result: 2"
          "Result: 3"
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {

        const interval$ = interval(500).pipe(take(5));
        const interval2$ = interval(500).pipe(take(5));

        /*
          interval is emitting a value every 0.5s.  This value is then being mapped to interval that
          is delayed for 1.0s.  The mergeAll operator takes an optional argument that determines how
          many inner observables to subscribe to at a time.  The rest of the observables are stored
          in a backlog waiting to be subscribe.
          	500	    1000	1500	2000	2500	3000	3500	4000	4500	5000	5500	6000
            A	    0	    1	    2	    3	    4
            B A0				    0	    1	    2
            B A1					        0	    1	    2
            B A2						            0	    1	    2
            B A3							                0	    1	    2
            B A4								                    0	    1	    2

        */
        const takeThree = map((val) => interval2$.pipe(
            delay(1000)
            , take(3)));

        const example = interval$.pipe(
            takeThree
            , mergeAll(2))
            .subscribe((val) => console.log(val));
        /*
          The subscription is completed once the operator emits all values.
        */
    }

}
