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
  TV_SCORE_DISTRIBUTION_FAILURE,
  TV_SCORE_DISTRIBUTION_SUCCESS,
  TV_SCORE_DISTRIBUTION_REQUEST,
} from "../reducers/tv";
import axios from "axios";
import { getSeriesDataURL, getTVSeriesDataURL } from "../utills";
const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "93041e50ffd37dbace90ae54a55c67f3"; //process.env.REACT_APP_API_KEY;
  config.params["language"] = "en-US";
  return config;
});
function topRatedTVAPI(data) {
  return api.get(`tv/top_rated?page=${data.page}`);
}
function* topRatedTV(action) {
  try {
    const result = yield call(topRatedTVAPI, action.payload);
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

function popularTVAPI(data) {
  return api.get(`tv/popular?page=${data.page}`);
}
function* popularTV(action) {
  try {
    const result = yield call(popularTVAPI, action.payload);
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

function airingTVAPI(data) {
  return api.get(`tv/airing_today?page=${data.page}`);
}
function* airingTV(action) {
  try {
    const result = yield call(airingTVAPI, action.payload);
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

function tvDetailAPI(data) {
  return api.get(`tv/${data.id}`, {
    params: {
      append_to_response: "videos",
    },
  });
}
function* tvDetail(action) {
  try {
    const result = yield call(tvDetailAPI, action.payload);
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
function* watchTvDetail() {
  yield takeLatest(TV_DETAIL_REQUEST, tvDetail);
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

function tvScoreDistributionAPI(data) {
  return axios.get(getTVSeriesDataURL(data.id));
}
function* tvScoreDistribution(action) {
  try {
    const result = yield call(tvScoreDistributionAPI, action.payload);
    yield put({
      type: TV_SCORE_DISTRIBUTION_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TV_SCORE_DISTRIBUTION_FAILURE,
      error: e,
    });
  }
}
function* watchTvScoreDistribution() {
  yield takeLatest(TV_SCORE_DISTRIBUTION_REQUEST, tvScoreDistribution);
}
export default function* tvSaga() {
  yield all([
    fork(watchTopRatedTV),
    fork(watchPopularTV),
    fork(watchAiringTV),
    fork(watchTvDetail),
    fork(watchTvRecommendation),
    fork(watchTvSearch),
    fork(watchTvCredit),
    fork(watchTvScoreDistribution),
  ]);
}
