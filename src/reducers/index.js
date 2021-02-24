import { combineReducers } from "redux";
import { sightingsReducer } from "./sightings";

const rootReducer = combineReducers({
  sightingsReducer,
});

export default rootReducer;
