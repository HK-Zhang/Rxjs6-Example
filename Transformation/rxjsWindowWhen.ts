import { interval, Observable, timer } from "rxjs";
import { mergeAll, tap, windowWhen } from "rxjs/operators";

export class WindowWhenPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit immediately then every 1s
        const source = timer(0, 1000);
        const example = source.pipe(
            // close window every 5s and emit observable of collected values from source
            windowWhen(() => interval(5000))
            , tap(() => console.log("NEW WINDOW!")));

        const subscribeTwo = example.pipe(
            // window emits nested observable
            mergeAll())
            /*
            output:
            "NEW WINDOW!"
            0
            1
            2
            3
            4
            "NEW WINDOW!"
            5
            6
            7
            8
            9
          */
            .subscribe((val) => console.log(val));
    }

}
