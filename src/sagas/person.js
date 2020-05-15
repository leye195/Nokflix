import { all, takeLatest, put, call, fork } from "redux-saga/effects";
import axios from "axios";
import {
  PERSON_DETAIL_REQUEST,
  PERSON_DETAIL_SUCCESS,
  PERSON_DETAIL_FAILURE,
  PERSON_TV_CREDIT_REQUEST,
  PERSON_TV_CREDIT_SUCCESS,
  PERSON_TV_CREDIT_FAILURE,
  PERSON_MOVIE_CREDIT_REQUEST,
  PERSON_MOVIE_CREDIT_SUCCESS,
  PERSON_MOVIE_CREDIT_FAILURE,
} from "../reducers/person";
const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "93041e50ffd37dbace90ae54a55c67f3"; //process.env.REACT_APP_API_KEY;
  config.params["language"] = "en-US";
  return config;
});
function personDetailAPI(data) {
  return api.get(`person/${data.id}`);
}
function* personDetail(action) {
  try {
    const result = yield call(personDetailAPI, action.payload);
    yield put({
      type: PERSON_DETAIL_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PERSON_DETAIL_FAILURE,
      error: e,
    });
  }
}
function* watchPersonDetail() {
  yield takeLatest(PERSON_DETAIL_REQUEST, personDetail);
}

function personMovieAPI(data) {
  return api.get(`person/${data.id}/movie_credits`);
}
function* personMovie(action) {
  try {
    const result = yield call(personMovieAPI, action.payload);
    yield put({
      type: PERSON_MOVIE_CREDIT_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PERSON_MOVIE_CREDIT_FAILURE,
      error: e,
    });
  }
}
function* watchPersonMovie() {
  yield takeLatest(PERSON_MOVIE_CREDIT_REQUEST, personMovie);
}

function personTVAPI(data) {
  return api.get(`person/${data.d}/tv_credits`);
}
function* personTV(action) {
  try {
    const result = yield call(personTVAPI, action.payload);
    yield put({
      type: PERSON_TV_CREDIT_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PERSON_TV_CREDIT_FAILURE,
      error: e,
    });
  }
}
function* watchPersonTV() {
  yield takeLatest(PERSON_TV_CREDIT_REQUEST, personTV);
}

export default function* personSaga() {
  yield all([
    fork(watchPersonDetail),
    fork(watchPersonMovie),
    fork(watchPersonTV),
  ]);
}
