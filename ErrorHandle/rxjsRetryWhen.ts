import { interval, Observable, of, range, timer } from "rxjs";
import { catchError, delayWhen, map, mergeMap, retryWhen, tap, zip } from "rxjs/operators";


export class RetryWhenPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit value every 1s
        const source = interval(1000);

        const throwErrorOnPurpose = map((val) => {
            if (val > 5) {
                // error will be picked up by retryWhen
                throw val;
            }
            return val;
        });

        // log error message
        const logError = tap((val) => console.log(`Value ${val} was too high!`));
        const restartLater = delayWhen((val: number) => timer(val * 1000));

        const logAndRetry = retryWhen((errors) =>
            errors.pipe(
                logError
                , restartLater));

        const example = source.pipe(
            throwErrorOnPurpose
            , logAndRetry);
        /*
          output:
          0
          1
          2
          3
          4
          5
          "Value 6 was too high!"
          --Wait 5 seconds then repeat
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit value every 1s
        const source = interval(1000);

        const throwErrorOnPurpose = map((val) => {
            if (val > 2) {
                throw val;
            }
            return val;
        });

        const processRetry = mergeMap(([error, i]) => {
            if (i > 3) {
                return Observable.throw(error);
            }
            console.log(`Wait ${i} seconds, then retry!`);
            return timer(i * 1000);
        });

        const retryHard = retryWhen((attempts) => attempts.pipe(
            zip(range(1, 4))
            , processRetry));

        const logError = catchError((_) => of("Ouch, giving up!"));


        const example = source.pipe(
            throwErrorOnPurpose
            , retryHard
            , logError);

        const subscribe = example.subscribe((val) => console.log(val));

        /*
        output:
        0
        1
        2
        Wait 1 seconds, then retry!
        0
        1
        2
        Wait 2 seconds, then retry!
        0
        1
        2
        Wait 3 seconds, then retry!
        0
        1
        2
        Ouch, giving up!
        */
    }

}
