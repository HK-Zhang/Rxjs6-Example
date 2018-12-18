
import { interval, of, timer } from "rxjs";
import { map, mapTo, mergeMap, switchMap, take } from "rxjs/operators";

export class MergeMapPoc {
    public test() {
        this.func0();
        // this.func01();
        // this.func1();
        // this.func3();
    }

    /**
     * func0
     */
    public func0() {
        const letters = of("a", "b", "c");

        const mapping = (x) => map((i) => x);

        const merge = switchMap((x) => interval(5000).pipe(
            mapping(x),
            take(5)));

        const result = letters.pipe(merge);

        result.subscribe(console.log);

        // => c ,c ,c ,c ,c
    }

    public func01() {
        const letters = of("a", "b", "c");

        const mapping = (x) => map((i) => x);

        const merge = mergeMap((x) => interval(5000).pipe(
            mapping(x),
            take(5)));

        const result = letters.pipe(merge);

        result.subscribe(console.log);

        // => a ,b ,c ,a ,b ,c ,a ,b ,c ,a ,b ,c ,a ,b ,c
    }

    public func1() {
        // emit value every 1s
        const letters = of("a", "b", "c");

        const mapping = (x) => map((i) => x + i.toString());

        const selector = (oV, iV, oI, iI) => {
            // console.log("innerValue", iV);
            return "inner" + iV;
        };

        const targetSource = (x) =>
            interval(1000).pipe(mapping(x), take(5));

        const merge = mergeMap(targetSource, selector, 2);

        const result = letters.pipe(merge);
        result.subscribe(console.log);

        // => innera0, innerb0 ... innera4, innerb4, innerc0, innerc1 ...
    }

    public func2() {
        // emit value every 1s
        const source = interval(1000);

        const example = source.pipe(mergeMap(
            // project
            (val) => interval(5000).pipe(take(2)),
            // resultSelector
            (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
            // concurrent
            2));
        /*
                Output:
                [0, 0, 0, 0] <--1st inner observable
                [1, 1, 0, 0] <--2nd inner observable
                [0, 0, 1, 1] <--1st inner observable
                [1, 1, 1, 1] <--2nd inner observable
                [2, 2, 0, 0] <--3rd inner observable
                [3, 3, 0, 0] <--4th inner observable
        */
        const subscribe = example.subscribe(console.log);
    }

    public func3() {
        const post$ = of({ id: 1 });
        const getPostInfo$ = timer(3000).pipe(mapTo({ title: "Post title" }));

        const posts$ = post$.pipe(mergeMap((post) => getPostInfo$)).subscribe(console.log);
        // => {title: "Post title"}
    }
}
