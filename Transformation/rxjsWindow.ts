import { interval, Observable, timer } from "rxjs";
import { mergeAll, scan, window } from "rxjs/operators";



export class WindowPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit immediately then every 1s
        const source = timer(0, 1000);
        const example = source.pipe(window(interval(3000)));
        const count = example.pipe(scan<any>((acc, curr) => acc + 1, 0));
        /*
          "Window 1:"
          0
          1
          2
          "Window 2:"
          3
          4
          5
          ...
        */
        const subscribe = count.subscribe((val) => console.log(`Window ${val}:`));
        const subscribeTwo = example.pipe(mergeAll()).subscribe((val) => console.log(val));
    }
}
