import { all, takeLatest, put, call, fork } from "redux-saga/effects";
import {
  MOVIE_NOW_REQUEST,
  MOVIE_NOW_SUCCESS,
  MOVIE_NOW_FAILURE,
  MOVIE_UPCOMING_REQUEST,
  MOVIE_UPCOMING_SUCCESS,
  MOVIE_UPCOMING_FAILURE,
  MOVIE_TOP_RATED_REQUEST,
  MOVIE_TOP_RATED_FAILURE,
  MOVIE_TOP_RATED_SUCCESS,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
  MOVIE_POPULAR_FAILURE,
  MOVIE_DETAIL_REQUEST,
  MOVIE_DETAIL_SUCCESS,
  MOVIE_DETAIL_FAILURE,
  MOVIE_RECOMMENDATION_REQUEST,
  MOVIE_RECOMMENDATION_SUCCESS,
  MOVIE_RECOMMENDATION_FAILURE,
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILURE,
  MOVIE_TREND_SUCCESS,
  MOVIE_TREND_FAILURE,
  MOVIE_TREND_REQUEST,
  MOVIE_CREDITS_REQUEST,
  MOVIE_CREDITS_FAILURE,
  MOVIE_CREDITS_SUCCESS,
} from "../reducers/movie";
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
function nowPlayingAPI(data) {
  return api.get(`movie/now_playing?page=${data.page}`);
}
function* nowPlaying(action) {
  try {
    const result = yield call(nowPlayingAPI, action.payload);
    yield put({
      type: MOVIE_NOW_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_NOW_FAILURE,
      error: e,
    });
  }
}
function* watchNowPlaying() {
  yield takeLatest(MOVIE_NOW_REQUEST, nowPlaying);
}

function upComingAPI(data) {
  return api.get(`movie/upcoming?page=${data.page}`);
}
function* upComing(action) {
  try {
    const result = yield call(upComingAPI, action.payload);
    yield put({
      type: MOVIE_UPCOMING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_UPCOMING_FAILURE,
      error: e,
    });
  }
}
function* watchUpComing() {
  yield takeLatest(MOVIE_UPCOMING_REQUEST, upComing);
}

function topRatedMovieAPI(data) {
  return api.get(`movie/top_rated?page=${data.page}`);
}
function* topRatedMovie(action) {
  try {
    const result = yield call(topRatedMovieAPI, action.payload);
    yield put({
      type: MOVIE_TOP_RATED_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_TOP_RATED_FAILURE,
      error: e,
    });
  }
}
function* watchTopRatedMovie() {
  yield takeLatest(MOVIE_TOP_RATED_REQUEST, topRatedMovie);
}

function popularMovieAPI(data) {
  return api.get(`movie/popular?page=${data.page}`);
}
function* popularMovie(action) {
  try {
    const result = yield call(popularMovieAPI, action.payload);
    yield put({
      type: MOVIE_POPULAR_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_POPULAR_FAILURE,
      error: e,
    });
  }
}
function* watchPopularMovie() {
  yield takeLatest(MOVIE_POPULAR_REQUEST, popularMovie);
}

function movieDetailAPI(data) {
  return api.get(`movie/${data.id}`, {
    params: {
      append_to_response: "videos",
    },
  });
}
function* movieDetail(action) {
  try {
    const result = yield call(movieDetailAPI, action.payload);
    yield put({
      type: MOVIE_DETAIL_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_DETAIL_FAILURE,
      error: e,
    });
  }
}
function* watchMovieDetail() {
  yield takeLatest(MOVIE_DETAIL_REQUEST, movieDetail);
}

function movieRecommendationAPI(data) {
  return api.get(`movie/${data.id}/recommendations`);
}
function* movieRecommendation(action) {
  try {
    const result = yield call(movieRecommendationAPI, action.payload);
    yield put({
      type: MOVIE_RECOMMENDATION_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_RECOMMENDATION_FAILURE,
      error: e,
    });
  }
}
function* watchMovieRecommendation() {
  yield takeLatest(MOVIE_RECOMMENDATION_REQUEST, movieRecommendation);
}

function movieSearchAPI(data) {
  return api.get("search/movie", {
    params: {
      query: encodeURIComponent(data.term),
    },
  });
}
function* movieSearch(action) {
  try {
    const result = yield call(movieSearchAPI, action.payload);
    yield put({
      type: MOVIE_SEARCH_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_SEARCH_FAILURE,
      error: e,
    });
  }
}
function* watchMovieSearch() {
  yield takeLatest(MOVIE_SEARCH_REQUEST, movieSearch);
}

function movieTrendAPI() {
  return api.get("trending/movie/day");
}
function* movieTrend() {
  try {
    const result = yield call(movieTrendAPI);
    yield put({
      type: MOVIE_TREND_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_TREND_FAILURE,
      error: e,
    });
  }
}
function* watchMovieTrend() {
  yield takeLatest(MOVIE_TREND_REQUEST, movieTrend);
}

function movieCreditAPI(data) {
  //console.log(data.id);
  return api.get(`movie/${data.id}/credits`);
}
function* movieCredit(action) {
  try {
    const result = yield call(movieCreditAPI, action.payload);
    yield put({
      type: MOVIE_CREDITS_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MOVIE_CREDITS_FAILURE,
      error: e,
    });
  }
}
function* watchMovieCredit() {
  yield takeLatest(MOVIE_CREDITS_REQUEST, movieCredit);
}

export default function* movieSaga() {
  yield all([
    fork(watchNowPlaying),
    fork(watchUpComing),
    fork(watchTopRatedMovie),
    fork(watchPopularMovie),
    fork(watchMovieDetail),
    fork(watchMovieRecommendation),
    fork(watchMovieSearch),
    fork(watchMovieTrend),
    fork(watchMovieCredit),
  ]);
}
