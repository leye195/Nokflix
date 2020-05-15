import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
export const PERSON_DETAIL_REQUEST = "PERSON_DETAIL_REQUEST";
export const PERSON_DETAIL_SUCCESS = "PERSON_DETAIL_SUCCESS";
export const PERSON_DETAIL_FAILURE = "PERSON_DETAIL_FAILURE";

export const PERSON_MOVIE_CREDIT_REQUEST = "PERSON_MOVIE_CREDIT_REQUEST";
export const PERSON_MOVIE_CREDIT_SUCCESS = "PERSON_MOVIE_CREDIT_SUCCESS";
export const PERSON_MOVIE_CREDIT_FAILURE = "PERSON_MOVIE_CREDIT_FAILURE";

export const PERSON_TV_CREDIT_REQUEST = "PERSON_TV_CREDIT_REQUEST";
export const PERSON_TV_CREDIT_SUCCESS = "PERSON_TV_CREDIT_SUCCESS";
export const PERSON_TV_CREDIT_FAILURE = "PERSON_TV_CREDIT_FAILURE";

export const loadPersonDetail = createAction(PERSON_DETAIL_REQUEST);
export const loadPersonMovieCredit = createAction(PERSON_MOVIE_CREDIT_REQUEST);
export const loadPersonTVCredit = createAction(PERSON_TV_CREDIT_REQUEST);

const initState = {
  info: {},
  movie: {},
  tv: {},
  isInfoLoading: true,
  isMovieLoading: true,
  isTVLoading: true,
};

export default handleActions(
  {
    [PERSON_DETAIL_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = true;
      }),
    [PERSON_DETAIL_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
        draft.info = action.payload;
      }),
    [PERSON_DETAIL_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isInfoLoading = false;
      }),
    [PERSON_MOVIE_CREDIT_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieLoading = true;
      }),
    [PERSON_MOVIE_CREDIT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieLoading = false;
        draft.movie = action.payload;
      }),
    [PERSON_MOVIE_CREDIT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isMovieLoading = false;
      }),
    [PERSON_TV_CREDIT_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVLoading = true;
      }),
    [PERSON_TV_CREDIT_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVLoading = false;
        draft.tv = action.payload;
      }),
    [PERSON_TV_CREDIT_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isTVLoading = false;
      }),
  },
  initState
);
