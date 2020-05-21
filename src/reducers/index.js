import { combineReducers } from "redux";
import movie from "./movie";
import tv from "./tv";
import person from "./person";
import season from "./season";
export default combineReducers({
  movie,
  tv,
  person,
  season,
});
