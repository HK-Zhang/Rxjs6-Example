﻿import { ConnectableObservable, interval, Subject } from "rxjs";
import { mapTo, multicast, take, tap } from "rxjs/operators";

export class MulticastPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit every 2 seconds, take 5
        const source = interval(2000).pipe(take(5));

        const example = source.pipe(
            // since we are multicasting below, side effects will be executed once
            tap(() => console.log("Side Effect #1"))
            , mapTo("Result!"));

        // subscribe subject to source upon connect()
        const multi = example.pipe(multicast(() => new Subject()));
        /*
          subscribers will share source
          output:
          "Side Effect #1"
          "Result!"
          "Result!"
          ...
        */
        const subscriberOne = multi.subscribe(console.log);
        const subscriberTwo = multi.subscribe(console.log);
        // subscribe subject to source
        (multi as ConnectableObservable<any>).connect();
    }

}
