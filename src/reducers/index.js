import { combineReducers } from "redux";
import { sightings } from "./sightings";

const rootReducer = combineReducers({
  sightings,
});

export default rootReducer;
