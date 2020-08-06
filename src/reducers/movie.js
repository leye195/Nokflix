import { handleActions, createAction } from "redux-actions";
import produce from "immer";
export const MOVIE_NOW_REQUEST = "MOVIE_NOW_REQUEST";
export const MOVIE_NOW_SUCCESS = "MOVIE_NOW_SUCCESS";
export const MOVIE_NOW_FAILURE = "MOVIE_NOW_FAILURE";

export const MOVIE_UPCOMING_REQUEST = "MOVIE_UPCOMING_REQUEST";
export const MOVIE_UPCOMING_SUCCESS = "MOVIE_UPCOMING_SUCCESS";
export const MOVIE_UPCOMING_FAILURE = "MOVIE_UPCOMING_FAILURE";

export const MOVIE_TOP_RATED_REQUEST = "MOVIE_TOP_RATED_REQUEST";
export const MOVIE_TOP_RATED_SUCCESS = "MOVIE_TOP_RATED_SUCCESS";
export const MOVIE_TOP_RATED_FAILURE = "MOVIE_TOP_RATED_FAILURE";

export const MOVIE_POPULAR_REQUEST = "MOVIE_POPULAR_REQUEST";
export const MOVIE_POPULAR_SUCCESS = "MOVIE_POPULAR_SUCCESS";
export const MOVIE_POPULAR_FAILURE = "MOVIE_POPULAR_FAILURE";

export const MOVIE_DETAIL_REQUEST = "MOVIE_DETAIL_REQUEST";
export const MOVIE_DETAIL_SUCCESS = "MOVIE_DETAIL_SUCCESS";
export const MOVIE_DETAIL_FAILURE = "MOVIE_DETAIL_FAILURE";

export const MOVIE_RECOMMENDATION_REQUEST = "MOVIE_RECOMMENDATION_REQUEST";
export const MOVIE_RECOMMENDATION_SUCCESS = "MOVIE_RECOMMENDATION_SUCCESS";
export const MOVIE_RECOMMENDATION_FAILURE = "MOVIE_RECOMMENDATION_FAILURE";

export const MOVIE_SEARCH_REQUEST = "MOVIE_SEARCH_REQUEST";
export const MOVIE_SEARCH_SUCCESS = "MOVIE_SEARCH_SUCCESS";
export const MOVIE_SEARCH_FAILURE = "MOVIE_SEARCH_FAILURE";

export const MOVIE_TREND_REQUEST = "MOVIE_TREND_REQUEST";
export const MOVIE_TREND_SUCCESS = "MOVIE_TREND_SUCCESS";
export const MOVIE_TREND_FAILURE = "MOVIE_TREND_FAILURE";

export const MOVIE_CREDITS_REQUEST = "MOVIE_CREDITS_REQUEST";
export const MOVIE_CREDITS_SUCCESS = "MOVIE_CREDITS_SUCCESS";
export const MOVIE_CREDITS_FAILURE = "MOVIE_CREDITS_FAILURE";

export const MOVIE_SCORE_DISTRIBUTION_REQUEST =
  "MOVIE_SCORE_DISTRIUTION_REQUEST";
export const MOVIE_SCORE_DISTRIBUTION_SUCCESS =
  "MOVIE_SCORE_DISTRIUTION_SUCCESS";
export const MOVIE_SCORE_DISTRIBUTION_FAILURE =
  "MOVIE_SCORE_DISTRIUTION_FAILURE";

export const loadMovieNow = createAction(MOVIE_NOW_REQUEST);
export const loadMovieUpcoming = createAction(MOVIE_UPCOMING_REQUEST);
export const loadTopRatedMovie = createAction(MOVIE_TOP_RATED_REQUEST);
export const loadPopularMovie = createAction(MOVIE_POPULAR_REQUEST);
export const loadMovieDetail = createAction(MOVIE_DETAIL_REQUEST);
export const loadMovieRecommendation = createAction(
  MOVIE_RECOMMENDATION_REQUEST
);
export const searchMovie = createAction(MOVIE_SEARCH_REQUEST);
export const loadMovieTrend = createAction(MOVIE_TREND_REQUEST);
export const loadMovieCredits = createAction(MOVIE_CREDITS_REQUEST);
export const loadMovieScoreDistribution = createAction(
  MOVIE_SCORE_DISTRIBUTION_REQUEST
);

const initState = {
  isMovieNowLoading: false,
  movieNowPlaying: [], //now playing
  isUpcomingLoading: false,
  upComingMovie: [], //upcoming movie
  isTopRatedMovieLoading: false,
  topRatedMovie: [], //topRated movie
  isMoviePopularLoading: false,
  moviePopular: [], //popular
  isRecommendationLoading: false,
  recommendations: [], //recommendation
  movieTrend: [],
  isMovieTrendLoading: false,

  isInfoLoading: false,
  info: {}, //detail

  isMovieSearching: false,
  movieResult: [],

  isCreditLoading: false,
  movieCast: [],
  movieCrew: [],
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
    [MOVIE_NOW_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieNowLoading = true;
        if (action.payload.page === 1) draft.movieNowPlaying = [];
      }),
    [MOVIE_NOW_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieNowLoading = false;
        draft.movieNowPlaying = draft.movieNowPlaying.concat(
          action.payload.results
        );
      }),
    [MOVIE_NOW_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieNowLoading = false;
      }),
    [MOVIE_UPCOMING_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isUpcomingLoading = true;
        if (action.payload.page === 1) draft.upComingMovie = [];
      }),
    [MOVIE_UPCOMING_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isUpcomingLoading = false;
        draft.upComingMovie = draft.upComingMovie.concat(
          action.payload.results
        );
      }),
    [MOVIE_UPCOMING_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isUpcomingLoading = false;
      }),
    [MOVIE_TOP_RATED_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isTopRatedMovieLoading = true;
        if (action.payload.page === 1) draft.topRatedMovie = [];
      }),
    [MOVIE_TOP_RATED_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isTopRatedMovieLoading = false;
        draft.topRatedMovie = draft.topRatedMovie.concat(
          action.payload.results
        );
      }),
    [MOVIE_TOP_RATED_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isTopRatedMovieLoading = false;
      }),
    [MOVIE_POPULAR_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isMoviePopularLoading = true;
        if (action.payload.page === 1) draft.moviePopular = [];
      }),
    [MOVIE_POPULAR_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isMoviePopularLoading = false;
        draft.moviePopular = draft.moviePopular.concat(action.payload.results);
      }),
    [MOVIE_POPULAR_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isMoviePopularLoading = false;
      }),
    [MOVIE_RECOMMENDATION_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isRecommendationLoading = true;
      }),
    [MOVIE_RECOMMENDATION_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isRecommendationLoading = false;
        draft.recommendations = action.payload.results;
      }),
    [MOVIE_RECOMMENDATION_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isRecommendationLoading = false;
      }),
    [MOVIE_SEARCH_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieSearching = true;
      }),
    [MOVIE_SEARCH_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieSearching = false;
        draft.movieResult = action.payload.results;
      }),
    [MOVIE_SEARCH_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieSearching = false;
      }),
    [MOVIE_DETAIL_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = true;
      }),
    [MOVIE_DETAIL_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
        draft.info = action.payload;
      }),
    [MOVIE_DETAIL_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
      }),
    [MOVIE_TREND_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieTrendLoading = true;
      }),
    [MOVIE_TREND_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieTrendLoading = false;
        draft.movieTrend = action.payload.results;
      }),
    [MOVIE_TREND_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieTrendLoading = false;
      }),
    [MOVIE_CREDITS_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isCreditLoading = true;
      }),
    [MOVIE_CREDITS_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isCreditLoading = false;
        draft.movieCrew = action.payload.crew;
        draft.movieCast = action.payload.cast;
      }),
    [MOVIE_CREDITS_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isCreditLoading = false;
      }),
    [MOVIE_SCORE_DISTRIBUTION_REQUEST]: (state, action) =>
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
    [MOVIE_SCORE_DISTRIBUTION_SUCCESS]: (state, action) =>
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
    [MOVIE_SCORE_DISTRIBUTION_FAILURE]: (state, action) =>
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
