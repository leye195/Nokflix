import { all, takeLatest, put, call, fork } from "redux-saga/effects";
import {
  TV_TOP_RATED_REQUEST,
  TV_TOP_RATED_SUCCESS,
  TV_TOP_RATED_FAILURE,
  TV_POPULAR_REQUEST,
  TV_POPULAR_SUCCESS,
  TV_POPULAR_FAILURE,
  TV_AIRING_REQUEST,
  TV_AIRING_SUCCESS,
  TV_AIRING_FAILURE,
  TV_DETAIL_REQUEST,
  TV_DETAIL_SUCCESS,
  TV_DETAIL_FAILURE,
  TV_RECOMMENDATION_REQUEST,
  TV_RECOMMENDATION_FAILURE,
  TV_RECOMMENDATION_SUCCESS,
  TV_SEARCH_REQUEST,
  TV_SEARCH_SUCCESS,
  TV_SEARCH_FAILURE,
  TV_CREDITS_REQUEST,
  TV_CREDITS_SUCCESS,
  TV_CREDITS_FAILURE,
} from "../reducers/tv";
import axios from "axios";
const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "93041e50ffd37dbace90ae54a55c67f3"; //process.env.REACT_APP_API_KEY;
  config.params["language"] = "en-US";
  return config;
});
function topRatedTVAPI() {
  return api.get(`tv/top_rated`);
}
function* topRatedTV() {
  try {
    const result = yield call(topRatedTVAPI);
    yield put({
      type: TV_TOP_RATED_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_TOP_RATED_FAILURE,
      error: e,
    });
  }
}
function* watchTopRatedTV() {
  yield takeLatest(TV_TOP_RATED_REQUEST, topRatedTV);
}

function popularTVAPI() {
  return api.get(`tv/popular`);
}
function* popularTV() {
  try {
    const result = yield call(popularTVAPI);
    yield put({
      type: TV_POPULAR_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_POPULAR_FAILURE,
      error: e,
    });
  }
}
function* watchPopularTV() {
  yield takeLatest(TV_POPULAR_REQUEST, popularTV);
}

function airingTVAPI() {
  return api.get("tv/airing_today");
}
function* airingTV() {
  try {
    const result = yield call(airingTVAPI);
    yield put({
      type: TV_AIRING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_AIRING_FAILURE,
      error: e,
    });
  }
}
function* watchAiringTV() {
  yield takeLatest(TV_AIRING_REQUEST, airingTV);
}

function movieDetailAPI(data) {
  return api.get(`tv/${data.id}`, {
    params: {
      append_to_response: "videos",
    },
  });
}
function* movieDetail(action) {
  try {
    const result = yield call(movieDetailAPI, action.payload);
    yield put({
      type: TV_DETAIL_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_DETAIL_FAILURE,
      error: e,
    });
  }
}
function* watchMovieDetail() {
  yield takeLatest(TV_DETAIL_REQUEST, movieDetail);
}

function tvRecommendationAPI(data) {
  return api.get(`tv/${data.id}/recommendations`);
}
function* tvRecommendation(action) {
  try {
    const result = yield call(tvRecommendationAPI, action.payload);
    yield put({
      type: TV_RECOMMENDATION_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_RECOMMENDATION_FAILURE,
      error: e,
    });
  }
}
function* watchTvRecommendation() {
  yield takeLatest(TV_RECOMMENDATION_REQUEST, tvRecommendation);
}

function tvSearchAPI(data) {
  return api.get("search/tv", {
    params: {
      query: encodeURIComponent(data.term),
    },
  });
}
function* tvSearch(action) {
  try {
    const result = yield call(tvSearchAPI, action.payload);
    yield put({
      type: TV_SEARCH_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_SEARCH_FAILURE,
      error: e,
    });
  }
}
function* watchTvSearch() {
  yield takeLatest(TV_SEARCH_REQUEST, tvSearch);
}

function tvCreditAPI(data) {
  return api.get(`tv/${data.id}/credits`);
}
function* movieCredit(action) {
  try {
    const result = yield call(tvCreditAPI, action.payload);
    yield put({
      type: TV_CREDITS_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_CREDITS_FAILURE,
      error: e,
    });
  }
}

function* watchTvCredit() {
  yield takeLatest(TV_CREDITS_REQUEST, movieCredit);
}

export default function* tvSaga() {
  yield all([
    fork(watchTopRatedTV),
    fork(watchPopularTV),
    fork(watchAiringTV),
    fork(watchMovieDetail),
    fork(watchTvRecommendation),
    fork(watchTvSearch),
    fork(watchTvCredit),
  ]);
}
