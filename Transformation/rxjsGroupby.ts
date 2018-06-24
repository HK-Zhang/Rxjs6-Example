﻿import { from, Observable } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";

export class GroupByPoc {

    public test() {
        this.func1();
    }

    public func1() {
        const people = [
            { name: "Sue", age: 25 },
            { name: "Joe", age: 30 },
            { name: "Frank", age: 25 },
            { name: "Sarah", age: 35 },
        ];
        // emit each person
        const source = from(people);
        // group by age
        const example = source.pipe(
            groupBy((person) => person.age)
            // return each item in group as array
            , mergeMap((group) => group.pipe(toArray())));
        /*
          output:
          [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
          [{age: 30, name: "Joe"}]
          [{age: 35, name: "Sarah"}]
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

}