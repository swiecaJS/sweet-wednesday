import { combineReducers } from "redux";
import cities from "./cities";
import sweets from "./sweets";

export default combineReducers({
  sth: "halko",
  cities,
  sweets
});
