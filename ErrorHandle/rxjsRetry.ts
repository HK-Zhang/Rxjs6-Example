import { interval, Observable, of, throwError } from "rxjs";
import { retry, switchMap } from "rxjs/operators";

export class RetryPoc {
    public test() {
        this.func1();
    }

    public func1() {
        // emit value every 1s
        const source = interval(1000);
        const porcess = switchMap((val) => {
            // throw error for demonstration
            if (val > 5) {
                return throwError("Error!");
            }
            return of(val);
        });

        const example = source.pipe(
            porcess
            , retry(2));
        /*
          output:
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          "Error!: Retried 2 times then quit!"
        */
        const subscribe = example.subscribe({
            error: (val) => console.log(`${val}: Retried 2 times then quit!`),
            next: (val) => console.log(val),
        });
    }

}
