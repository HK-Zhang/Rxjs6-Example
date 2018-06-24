import { from, Observable, range } from "rxjs";
import { filter, map, reduce, scan, startWith } from "rxjs/operators";

export class PipePoc {

    public test() {
        // this.func1();
        this.func2();
        // this.func3();
        // this.func4();
    }

    public func1() {
        const filterOutEvens = filter((x: number) => (x % 2) === 0);
        const sum = reduce((acc, next) => acc + next, 0);
        const doubleBy = (x) => map((value: any) => value * x);

        // const complicatedLogic = pipe(
        //     filterOutEvens,
        //     doubleBy(2),
        //     sum,
        // );

        const source$ = range(0, 10);
        source$.pipe(
            filterOutEvens
            , doubleBy(2)
            , sum)
            .subscribe((x) => console.log(x)); // 40
    }

    public func2() {
        const filterOutEvens = filter((x: number) => x % 2 === 0);
        const doubleBy = (x) => map((value: any) => value * x);
        const sum = reduce((acc, next) => acc + next, 0);
        const source$ = range(0, 10);

        source$.pipe(
            filterOutEvens,
            doubleBy(2),
            sum)
            .subscribe(console.log); // 40
    }

    public func3() {
        const source$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        source$.pipe(
            filter((x) => x % 2 === 1)
            , map((x) => x * 2)
            , scan((acc, next) => acc + next, 0)
            , startWith(0))
            .subscribe(console.log);
    }

    // public func4() {
    //     const filterOutEvens = filter((x: number) => x % 2 === 1);
    //     const sum = reduce((acc, next) => acc + next, 0);
    //     const doubleBy = (x) => map((value: any)  => value * x);
    //     const source$ = range(0, 10);

    //     source$
    //         .let(filterOutEvens)
    //         .let(doubleBy(2))
    //         .let(sum)
    //         .subscribe((x) => console.log(x)); // 50
    // }

}
