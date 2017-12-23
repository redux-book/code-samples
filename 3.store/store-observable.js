import store from "store";
import { Observable } from "rxjs";

const store$ = Observable.from(store);

store$.forEach((state) => console.log(state));


// Alternatively get the observable directly from the store:
// const observable = store[Symbol.observable]();


// Implement your own observer API:
const observer = {
  next(state) {
    console.log("State change", state);
  }
};

const observable = store[Symbol.observable]();
const unsubscribe = observable.subscribe(observer);

unsubscribe();
