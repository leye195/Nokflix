import { handleActions, createAction } from "redux-actions";
import produce from "immer";

export const TV_TOP_RATED_REQUEST = "TV_TOP_RATED_REQUEST";
export const TV_TOP_RATED_SUCCESS = "TV_TOP_RATED_SUCCESS";
export const TV_TOP_RATED_FAILURE = "TV_TOP_RATED_FAILURE";

export const TV_POPULAR_REQUEST = "TV_POPULAR_REQUEST";
export const TV_POPULAR_SUCCESS = "TV_POPULAR_SUCCESS";
export const TV_POPULAR_FAILURE = "TV_POPULAR_FAILURE";

export const TV_AIRING_REQUEST = "TV_AIRING_REQUEST";
export const TV_AIRING_SUCCESS = "TV_AIRING_SUCCESS";
export const TV_AIRING_FAILURE = "TV_AIRING_FAILURE";

export const TV_DETAIL_REQUEST = "TV_DETAIL_REQUEST";
export const TV_DETAIL_SUCCESS = "TV_DETAIL_SUCCESS";
export const TV_DETAIL_FAILURE = "TV_DETAIL_FAILURE";

export const TV_RECOMMENDATION_REQUEST = "TV_RECOMMENDATION_REQUEST";
export const TV_RECOMMENDATION_SUCCESS = "TV_RECOMMENDATION_SUCCESS";
export const TV_RECOMMENDATION_FAILURE = "TV_RECOMMENDATION_FAILURE";

export const TV_SEARCH_REQUEST = "TV_SEARCH_REQUEST";
export const TV_SEARCH_SUCCESS = "TV_SEARCH_SUCCESS";
export const TV_SEARCH_FAILURE = "TV_SEARCH_FAILURE";

export const TV_CREDITS_REQUEST = "TV_CREDITS_REQUEST";
export const TV_CREDITS_SUCCESS = "TV_CREDITS_SUCCESS";
export const TV_CREDITS_FAILURE = "TV_CREDITS_FAILURE";

export const TV_SCORE_DISTRIBUTION_REQUEST = "TV_SCORE_DISTRIBUTION_REQUEST";
export const TV_SCORE_DISTRIBUTION_SUCCESS = "TV_SCORE_DISTRIBUTION_SUCCESS";
export const TV_SCORE_DISTRIBUTION_FAILURE = "TV_SCORE_DISTRIBUTION_FAILURE";

export const loadTopRatedTV = createAction(TV_TOP_RATED_REQUEST);
export const loadPopularTV = createAction(TV_POPULAR_REQUEST);
export const loadAiringTV = createAction(TV_AIRING_REQUEST);
export const loadTVDetail = createAction(TV_DETAIL_REQUEST);
export const loadTVRecommendation = createAction(TV_RECOMMENDATION_REQUEST);
export const searchTV = createAction(TV_SEARCH_REQUEST);
export const loadTVCredits = createAction(TV_CREDITS_REQUEST);
export const loadTVScoreDistribution = createAction(
  TV_SCORE_DISTRIBUTION_REQUEST
);

const initState = {
  isTopRatedTVLoading: false,
  topRatedTV: [], //topRated TV

  isTVPopularLoading: false,
  tvPopular: [],

  isRecommendationLoading: false,
  recommendations: [], //recommendation

  isInfoLoading: false,
  info: {}, //detail

  isAiringTodayLoading: false,
  airingToday: [], //tv airing today

  isTVSearching: false,
  tvResult: [],

  tvCast: [],
  tvCrew: [],
  scoreDistribution: [
    { key: 1, doc_count: 0 },
    { key: 2, doc_count: 0 },
    { key: 3, doc_count: 0 },
    { key: 4, doc_count: 0 },
    { key: 5, doc_count: 0 },
    { key: 6, doc_count: 0 },
    { key: 7, doc_count: 0 },
    { key: 8, doc_count: 0 },
    { key: 9, doc_count: 0 },
    { key: 10, doc_count: 0 },
  ],
};
export default handleActions(
  {
    [TV_TOP_RATED_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isTopRatedTVLoading = true;
        if (action.payload.page === 1) draft.topRatedTV = [];
      }),
    [TV_TOP_RATED_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isTopRatedTVLoading = false;
        draft.topRatedTV = draft.topRatedTV.concat(action.payload.results);
      }),
    [TV_TOP_RATED_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isTopRatedTVLoading = false;
      }),
    [TV_POPULAR_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVPopularLoading = true;
        if (action.payload.page === 1) draft.tvPopular = [];
      }),
    [TV_POPULAR_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVPopularLoading = false;
        draft.tvPopular = draft.tvPopular.concat(action.payload.results);
      }),
    [TV_POPULAR_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVPopularLoading = false;
      }),
    [TV_AIRING_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isAiringTodayLoading = true;
        if (action.payload.page === 1) draft.airingToday = [];
      }),
    [TV_AIRING_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isAiringTodayLoading = false;
        draft.airingToday = draft.airingToday.concat(action.payload.results);
      }),
    [TV_AIRING_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isAiringTodayLoading = false;
      }),
    [TV_DETAIL_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = true;
      }),
    [TV_DETAIL_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
        draft.info = action.payload.results;
      }),
    [TV_DETAIL_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
      }),
    [TV_RECOMMENDATION_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isRecommendationLoading = true;
      }),
    [TV_RECOMMENDATION_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isRecommendationLoading = false;
        draft.recommendations = action.payload.results;
      }),
    [TV_RECOMMENDATION_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isRecommendationLoading = false;
      }),
    [TV_SEARCH_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVSearching = true;
      }),
    [TV_SEARCH_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVSearching = false;
        draft.tvResult = action.payload.results;
      }),
    [TV_SEARCH_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVSearching = false;
      }),
    [TV_DETAIL_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = true;
      }),
    [TV_DETAIL_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
        draft.info = action.payload;
      }),
    [TV_DETAIL_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
      }),
    [TV_CREDITS_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isCreditLoading = true;
      }),
    [TV_CREDITS_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isCreditLoading = false;
        draft.tvCrew = action.payload.crew;
        draft.tvCast = action.payload.cast;
      }),
    [TV_CREDITS_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isCreditLoading = false;
      }),
    [TV_SCORE_DISTRIBUTION_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.scoreDistribution = [
          { key: 1, doc_count: 0 },
          { key: 2, doc_count: 0 },
          { key: 3, doc_count: 0 },
          { key: 4, doc_count: 0 },
          { key: 5, doc_count: 0 },
          { key: 6, doc_count: 0 },
          { key: 7, doc_count: 0 },
          { key: 8, doc_count: 0 },
          { key: 9, doc_count: 0 },
          { key: 10, doc_count: 0 },
        ];
      }),
    [TV_SCORE_DISTRIBUTION_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        const { payload } = action;
        const extractSeries =
          payload
            .split(" ")
            .filter((v) => v.startsWith("[") && v.includes("doc_count"))[0] ||
          [];
        const seriesData = JSON.parse(
          extractSeries.slice(0, extractSeries.length - 2)
        );
        draft.scoreDistribution = [...seriesData];
      }),
    [TV_SCORE_DISTRIBUTION_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.scoreDistribution = [
          { key: 1, doc_count: 0 },
          { key: 2, doc_count: 0 },
          { key: 3, doc_count: 0 },
          { key: 4, doc_count: 0 },
          { key: 5, doc_count: 0 },
          { key: 6, doc_count: 0 },
          { key: 7, doc_count: 0 },
          { key: 8, doc_count: 0 },
          { key: 9, doc_count: 0 },
          { key: 10, doc_count: 0 },
        ];
      }),
  },
  initState
);
