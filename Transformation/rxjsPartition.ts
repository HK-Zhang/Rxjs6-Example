import { from, merge, of } from "rxjs";
import { catchError, map, partition } from "rxjs/operators";

export class PartitionPoc {

    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        const source = from([1, 2, 3, 4, 5, 6]);
        // first value is true, second false
        const split = partition((val: number) => val % 2 === 0);
        const [evens, odds] = split(source);
        // const [evens, odds] = source.pipe(partition(val => val % 2 === 0));
        /*
          Output:
          "Even: 2"
          "Even: 4"
          "Even: 6"
          "Odd: 1"
          "Odd: 3"
          "Odd: 5"
        */
        const subscribe = merge(
            evens.pipe(map((val) => `Even: ${val}`)),
            odds.pipe(map((val) => `Odd: ${val}`)),
        ).subscribe(console.log);
    }

    public func2() {
        const source = from([1, 2, 3, 4, 5, 6]);
        // if greater than 3 throw
        const judge = map((val) => {
            if (val > 3) {
                throw new Error(`${val} greater than 3!`);
            }
            return { success: val };
        });

        const handleError = catchError((val) => of({ error: val }));

        const example = source.pipe(
            judge
            , handleError);
        // split on success or error
        const split = partition((res: any) => res.success);
        const [success, error] = split(example);
        /*
          Output:
          "Success! 1"
          "Success! 2"
          "Success! 3"
          "Error! 4 greater than 3!"
        */
        const subscribe = merge(
            success.pipe(map((val) => `Success! ${val.success}`)),
            error.pipe(map((val) => `Error! ${val.error}`)),
        ).subscribe(console.log);
    }

}
