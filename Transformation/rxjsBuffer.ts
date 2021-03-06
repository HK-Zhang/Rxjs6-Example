﻿import { interval } from "rxjs";
import { buffer } from "rxjs/operators";


export class BufferPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // Create an observable that emits a value every second
        const myInterval = interval(1000);

        const bufferBy = interval(5000);

        const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
        // Print values to console
        // ex. output: [0,1,2,3] ... [4,5,6,7,8]
        const subscribe = myBufferedInterval.subscribe((val) =>
            console.log(" Buffered Values:", val),
        );
    }

}
