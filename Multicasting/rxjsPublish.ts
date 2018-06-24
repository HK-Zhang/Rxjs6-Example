import { ConnectableObservable, interval, Observable } from "rxjs";
import { publish, tap } from "rxjs/operators";



export class PublishPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit value every 1 second
        const source = interval(1000);
        const example = source.pipe(
            // side effects will be executed once
            tap(() => console.log("Do Something!"))
            // do nothing until connect() is called
            , publish());

        /*
          source will not emit values until connect() is called
          output: (after 5s)
          "Do Something!"
          "Subscriber One: 0"
          "Subscriber Two: 0"
          "Do Something!"
          "Subscriber One: 1"
          "Subscriber Two: 1"
        */
        const subscribe = example.subscribe((val) =>
            console.log(`Subscriber One: ${val}`),
        );
        const subscribeTwo = example.subscribe((val) =>
            console.log(`Subscriber Two: ${val}`),
        );

        // call connect after 5 seconds, causing source to begin emitting items
        setTimeout(() => {
            (example as ConnectableObservable<any>).connect();
        }, 5000);
    }

}
