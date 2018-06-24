import { merge, Observable, of } from "rxjs";
import { delay, mapTo } from "rxjs/operators";

export class DelayPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit one item
        const example = of(null);
        // delay output of each by an extra second
        const message = merge(
            example.pipe(mapTo("Hello")),
            example.pipe(mapTo("World!"), delay(1000)),
            example.pipe(mapTo("Goodbye"), delay(2000)),
            example.pipe(mapTo("World!"), delay(3000)),
        );
        // output: 'Hello'...'World!'...'Goodbye'...'World!'
        const subscribe = message.subscribe((val) => console.log(val));
    }

}
