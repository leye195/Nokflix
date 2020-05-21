import { all, takeLatest, put, call, fork } from "redux-saga/effects";
import axios from "axios";
import {
  SEASON_REQUEST,
  SEASON_SUCCESS,
  SEASON_FAILURE,
} from "../reducers/season";
const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "93041e50ffd37dbace90ae54a55c67f3"; //process.env.REACT_APP_API_KEY;
  config.params["language"] = "en-US";
  return config;
});

function loadSeasonAPI(data) {
  return api.get(`/tv/${data.id}/season/${data.season}`);
}
function* loadSeason(action) {
  try {
    const result = yield call(loadSeasonAPI, action.payload);
    yield put({
      type: SEASON_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: SEASON_FAILURE,
      error: e,
    });
  }
}
function* watchLoadSeason() {
  yield takeLatest(SEASON_REQUEST, loadSeason);
}
export default function* seasonSaga() {
  yield all([fork(watchLoadSeason)]);
}
