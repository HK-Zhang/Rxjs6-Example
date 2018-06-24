import { Observable, timer } from "rxjs";

export class TimerPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit 0 after 1 second then complete, since no second argument is supplied
        const source = timer(1000);
        // output: 0
        const subscribe = source.subscribe((val) => console.log(val));
    }

    public func2() {
        /*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
        const source = timer(1000, 2000);
        // output: 0,1,2,3,4,5......
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
