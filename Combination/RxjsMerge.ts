import { interval, merge, Observable } from "rxjs";
import { mapTo, merge as mergeOp } from "rxjs/operators";


export class MergePoc {
    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // emit every 2.5 seconds
        const first = interval(2500);
        // emit every 2 seconds
        const second = interval(2000);
        // emit every 1.5 seconds
        const third = interval(1500);
        // emit every 1 second
        const fourth = interval(1000);

        // emit outputs from one observable
        const example = merge(
            first.pipe(mapTo("FIRST!")),
            second.pipe(mapTo("SECOND!")),
            third.pipe(mapTo("THIRD")),
            fourth.pipe(mapTo("FOURTH")),
        );
        // output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit every 2.5 seconds
        const first = interval(2500);
        // emit every 1 second
        const second = interval(1000);
        // used as instance method
        // const example = first.pipe(mergeOp(second));
        const example = merge(first, second);
        // output: 0,1,0,2....
        const subscribe = example.subscribe((val) => console.log(val));
    }

}
