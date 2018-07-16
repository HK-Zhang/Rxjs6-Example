import { DelayPoc, DelayWhenPoc, DoPoc, LetPoc, PipePoc, TimeoutPoc, ToPromisePoc } from "./Utility";

import {
    BufferCountPoc, BufferPoc, BufferTimePoc, BufferTogglePoc, BufferWhenPoc, ConcatMapPoc, ConcatMapToPoc,
    ExhaustMapPoc, ExpandPoc, GroupByPoc, MapPoc, MaptoPoc, MergeMapPoc, PartitionPoc, PluckPoc,
    ReducePoc, ScanPoc, SwithMapPoc, WindowCountPoc, WindowPoc, WindowTimePoc, WindowTogglePoc, WindowWhenPoc,
} from "./Transformation";

import {
    CombineAllPoc, CombineLatestPoc, ConcatPoc, ForkJoinPoc, MergeAllPoc, MergePoc, PairwisePoc, RacePoc,
    StartWithPoc, WithLatestFromPoc, ZipPoc,
} from "./Combination";

import {
    CreatePoc, EmptyPoc, FromPoc, FromPromisePoc, IntervalPoc, OfPoc, RangePoc, ThrowPoc,
    TimerPoc,
} from "./Creation";

import { CatchPoc, RetryPoc, RetryWhenPoc } from "./ErrorHandle";

import {
    DebouncePoc, DebounceTimePoc, FilterPoc, FirstPoc, IgnoreElementPoc, LastPoc, RxjsDistinctUntilChangedPoc,
    SamplePoc,
    SinglePoc, SkipPoc, SkipUntilPoc, SkipWhilePoc, TakePoc, TakeUntilPoc, TakewhilePoc, ThrottlePoc, ThrottleTimePoc,
} from "./Filter";

import { MulticastPoc, PublishPoc, SharePoc } from "./Multicasting";

import { DefaultIfEmptyPoc, EveryPoc, IIFPoc } from "./Conditional";

import { AsyncSubjectPoc, BehaviorSubjectPoc, ReplaySubjectPoc, SubjectPoc } from "./Subject";

let obj: any;
let rxjsMethod = "race";

switch (rxjsMethod) {
    case "pipe":
        obj = new PipePoc();
        break;
    case "iif":
        obj = new IIFPoc();
        break;
    case "zip":
        obj = new ZipPoc();
        break;
    case "mergeAll":
        obj = new MergeAllPoc();
        break;
    case "combineAll":
        obj = new CombineAllPoc();
        break;
    case "throttleTime":
        obj = new ThrottleTimePoc();
        break;
    case "throttle":
        obj = new ThrottlePoc();
        break;
    case "takewhile":
        obj = new TakewhilePoc();
        break;
    case "skipWhile":
        obj = new SkipWhilePoc();
        break;
    case "skipUntil":
        obj = new SkipUntilPoc();
        break;
    case "race":
        obj = new RacePoc();
        break;
    case "skip":
        obj = new SkipPoc();
        break;
    case "single":
        obj = new SinglePoc();
        break;
    case "sample":
        obj = new SamplePoc();
        break;
    case "last":
        obj = new LastPoc();
        break;
    case "takeUntil":
        obj = new TakeUntilPoc();
        break;
    case "ignoreElements":
        obj = new IgnoreElementPoc();
        break;
    case "first":
        obj = new FirstPoc();
        break;
    case "forkJoin":
        obj = new ForkJoinPoc();
        break;
    case "concat":
        obj = new ConcatPoc();
        break;
    case "concatMap":
        obj = new ConcatMapPoc();
        break;
    case "map":
        obj = new MapPoc();
        break;
    case "mergeMap":
        obj = new MergeMapPoc();
        break;
    case "switchMap":
        obj = new SwithMapPoc();
        break;
    case "tap":
        obj = new DoPoc();
        break;
    case "of":
        obj = new OfPoc();
        break;
    case "debounce":
        obj = new DebouncePoc();
        break;
    case "retry":
        obj = new RetryPoc();
        break;
    case "catchError":
        obj = new CatchPoc();
        break;
    case "from.promise":
        obj = new FromPromisePoc();
        break;
    case "from":
        obj = new FromPoc();
        break;
    case "withLatestFrom":
        obj = new WithLatestFromPoc();
        break;
    case "startWith":
        obj = new StartWithPoc();
        break;
    case "merge":
        obj = new MergePoc();
        break;
    case "pairwise":
        obj = new PairwisePoc();
        break;
    case "combineLatest":
        obj = new CombineLatestPoc();
        break;
    case "retryWhen":
        obj = new RetryWhenPoc();
        break;
    case "debounceTime":
        obj = new DebounceTimePoc();
        break;
    case "distinctUntilChanged":
        obj = new RxjsDistinctUntilChangedPoc();
        break;
    case "filter":
        obj = new FilterPoc();
        break;
    case "take":
        obj = new TakePoc();
        break;
    case "share":
        obj = new SharePoc();
        break;
    case "bufferTime":
        obj = new BufferTimePoc();
        break;
    case "scan":
        obj = new ScanPoc();
        break;
    case "create":
        obj = new CreatePoc();
        break;
    case "empty":
        obj = new EmptyPoc();
        break;
    case "interval":
        obj = new IntervalPoc();
        break;
    case "range":
        obj = new RangePoc();
        break;
    case "throwError":
        obj = new ThrowPoc();
        break;
    case "timer":
        obj = new TimerPoc();
        break;
    case "every":
        obj = new EveryPoc();
        break;
    case "defaultIfEmpty":
        obj = new DefaultIfEmptyPoc();
        break;
    case "delay":
        obj = new DelayPoc();
        break;
    case "delayWhen":
        obj = new DelayWhenPoc();
        break;
    case "let":
        obj = new LetPoc();
        break;
    case "toPromise":
        obj = new ToPromisePoc();
        break;
    case "timeout":
        obj = new TimeoutPoc();
        break;
    case "publish":
        obj = new PublishPoc();
        break;
    case "multicast":
        obj = new MulticastPoc();
        break;
    case "buffer":
        obj = new BufferPoc();
        break;
    case "bufferCount":
        obj = new BufferCountPoc();
        break;
    case "bufferToggle":
        obj = new BufferTogglePoc();
        break;
    case "bufferWhen":
        obj = new BufferWhenPoc();
        break;
    case "concatMapTo":
        obj = new ConcatMapToPoc();
        break;
    case "expand":
        obj = new ExpandPoc();
        break;
    case "exhaustMap":
        obj = new ExhaustMapPoc();
        break;
    case "groupBy":
        obj = new GroupByPoc();
        break;
    case "mapto":
        obj = new MaptoPoc();
        break;
    case "partition":
        obj = new PartitionPoc();
        break;
    case "pluck":
        obj = new PluckPoc();
        break;
    case "reduce":
        obj = new ReducePoc();
        break;
    case "window":
        obj = new WindowPoc();
        break;
    case "windowCount":
        obj = new WindowCountPoc();
        break;
    case "windowTime":
        obj = new WindowTimePoc();
        break;
    case "windowWhen":
        obj = new WindowWhenPoc();
        break;
    case "windowToggle":
        obj = new WindowTogglePoc();
        break;
    case "Subject":
        obj = new SubjectPoc();
        break;
    case "AsyncSubject":
        obj = new AsyncSubjectPoc();
        break;
    case "ReplaySubject":
        obj = new ReplaySubjectPoc();
        break;
    case "BehaviorSubject":
        obj = new BehaviorSubjectPoc();
        break;
    default:
        console.log("No demo for your requested methond.");
        break;
}


obj.test();
