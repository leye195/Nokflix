import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

export const SEASON_REQUEST = "SEASON_REQUEST";
export const SEASON_SUCCESS = "SEASON_SUCCESS";
export const SEASON_FAILURE = "SEASON_FAILURE";

export const loadSeason = createAction(SEASON_REQUEST);

const initState = {
  isLoadingSeason: true,
  season: {},
};

export default handleActions(
  {
    [SEASON_REQUEST]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoadingSeason = true;
      }),
    [SEASON_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoadingSeason = false;
        draft.season = action.payload;
      }),
    [SEASON_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoadingSeason = false;
      }),
  },
  initState
);
