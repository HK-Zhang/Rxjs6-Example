import { Observable, of } from "rxjs";
import { catchError, concatMap, delay, timeout } from "rxjs/operators";

export class TimeoutPoc {

    public test() {
        this.func1();
    }

    public makeRequest(timeToDelay) {
        return of("Request Complete!").pipe(delay(timeToDelay));
    }

    public func1() {
        of(4000, 3000, 2000).pipe(
            concatMap((duration) =>
                this.makeRequest(duration).pipe(
                    timeout(2500)
                    , catchError((error) => of(`Request timed out after: ${duration}`))),
            ))
            /*
            *  "Request timed out after: 4000"
            *  "Request timed out after: 3000"
            *  "Request Complete!"
            */
            .subscribe((val) => console.log(val));
    }

}
