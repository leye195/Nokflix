import { combineReducers } from "redux";
import movie from "./movie";
import tv from "./tv";
import person from "./person";
export default combineReducers({
  movie,
  tv,
  person,
});
