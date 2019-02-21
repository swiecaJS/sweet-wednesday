import { combineReducers } from "redux";
import cities from "./cities";
import sweets from "./sweets";
import loading from "./loading";

export default combineReducers({
  sth: "halko",
  cities,
  sweets,
  isLoading: loading
});
