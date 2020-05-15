import { all, call } from "redux-saga/effects";
import movie from "./movie";
import tv from "./tv";
import person from "./person";
export default function* rootSaga() {
  yield all([call(movie), call(tv), call(person)]);
}
