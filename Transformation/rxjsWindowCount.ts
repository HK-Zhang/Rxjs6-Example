import { interval, Observable } from "rxjs";
import { mergeAll, tap,  windowCount} from "rxjs/operators";



export class WindowCountPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit every 1s
        const source = interval(1000);
        const example = source.pipe(
            // start new window every 4 emitted values
            windowCount(4)
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
            "NEW WINDOW!"
            4
            5
            6
            7
          */
            .subscribe((val) => console.log(val));
    }


}
