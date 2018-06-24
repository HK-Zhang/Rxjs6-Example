import { Observable } from "rxjs";


export class CreatePoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        /*
        Create an observable that emits 'Hello' and 'World' on
        subscription.
        */
        const hello = Observable.create((observer) => {
            observer.next("Hello");
            observer.next("World");
        });

        // output: 'Hello'...'World'
        const subscribe = hello.subscribe((val) => console.log(val));
    }

    public func2() {
        /*
        Increment value every 1s, emit even numbers.
        */
        const evenNumbers = Observable.create((observer) => {
            let value = 0;
            const interval = setInterval(() => {
                if (value % 2 === 0) {
                    observer.next(value);
                }
                value++;
            }, 1000);

            return () => {
                console.log("disposed");
                clearInterval(interval);
            };
        });
        // output: 0...2...4...6...8
        const subscribe = evenNumbers.subscribe((val) => console.log(val));
        // unsubscribe after 10 seconds
        setTimeout(() => {
            subscribe.unsubscribe();
        }, 10000);
    }
}
