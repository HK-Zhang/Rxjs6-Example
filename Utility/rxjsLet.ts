// import "rxjs/add/observable/from";
// import "rxjs/add/observable/of";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/let";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/mergeMap";
// import "rxjs/add/operator/retry";
// import { Observable, from } from "rxjs";
// import { let } from "rxjs/operators";



export class LetPoc {

//     public test() {
//         // this.func1();
//         // this.func2();
//         // this.func3();
//         this.func4();

//     }

//     public func1() {
//         // custom error handling logic
//         const retryThreeTimes = (obs) =>
//             obs.retry(3).catch((_) => Observable.of("ERROR!"));
//         const examplePromise = (val) =>
//             new Promise((resolve) => resolve(`Complete: ${val}`));

//         // faking request
//         const subscribe = Observable.of("some_url")
//             .mergeMap((url) => examplePromise(url))
//             // could reuse error handling logic in multiple places with let
//             .let(retryThreeTimes)
//             // output: Complete: some_url
//             .subscribe((result) => console.log(result));

//         const customizableRetry = (retryTimes) => (obs) =>
//             obs.retry(retryTimes).catch((_) => Observable.of("ERROR!"));

//         // faking request
//         const secondSubscribe = Observable.of("some_url")
//             .mergeMap((url) => examplePromise(url))
//             // could reuse error handling logic in multiple places with let
//             .let(customizableRetry(3))
//             // output: Complete: some_url
//             .subscribe((result) => console.log(result));

//     }

//     public func2() {
//         // emit array as a sequence
//         const source = Observable.from([1, 2, 3, 4, 5]);
//         // demonstrating the difference between let and other operators
//         const test = source
//             .map((val) => val + 1)
//             /*
//                   this would fail, let behaves differently than most operators
//                   val in this case is an observable
//             */
//             // .let(val => val + 2)
//             .subscribe((val) => console.log("VALUE FROM ARRAY: ", val));

//         const subscribe = source
//             .map((val) => val + 1)
//             // 'let' me have the entire observable
//             .let((obs) => obs.map((val) => val + 2))
//             // output: 4,5,6,7,8
//             .subscribe((val) => console.log("VALUE FROM ARRAY WITH let: ", val));
//     }

//     public func3() {
//         // emit array as a sequence
//         const source = Observable.from([1, 2, 3, 4, 5]);

//         // let provides flexibility to add multiple operators to source observable then return
//         const subscribeTwo = source
//             .map((val) => val + 1)
//             .let((obs) =>
//                 obs
//                     .map((val) => val + 2)
//                     // also, just return evens
//                     .filter((val) => val % 2 === 0),
//             )
//             // output: 4,6,8
//             .subscribe((val) => console.log("let WITH MULTIPLE OPERATORS: ", val));
//     }

//     public func4() {
//         // emit array as a sequence
//         const source = Observable.from([1, 2, 3, 4, 5]);

//         // pass in your own function to add operators to observable
//         const obsArrayPlusYourOperators = (yourAppliedOperators) => {
//             return source.map((val) => val + 1).let(yourAppliedOperators);
//         };
//         const addTenThenTwenty = (obs) => obs.map((val) => val + 10).map((val) => val + 20);
//         const subscribe = obsArrayPlusYourOperators(addTenThenTwenty)
//             // output: 32, 33, 34, 35, 36
//             .subscribe((val) => console.log("let FROM FUNCTION:", val));
//     }

}
