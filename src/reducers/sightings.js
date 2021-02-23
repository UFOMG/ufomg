import {
  FETCH_SIGHTINGS_PENDING,
  FETCH_SIGHTINGS_SUCCESS,
  FETCH_SIGHTINGS_ERROR,
  POST_SIGHTINGS_SUCCESS,
} from "../actions";

const initialState = {
  pending: false,
  sightings: [],
  error: null,
};

export const sightingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGHTINGS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SIGHTINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        sightings: action.sightings,
      };
    case FETCH_SIGHTINGS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case POST_SIGHTINGS_SUCCESS:
      return {
        ...state,
        sightings: [...state.sightings, action.sighting],
      };
    default:
      return state;
  }
};

export const getSightings = (state) => state.sightings;
export const getSightingsPending = (state) => state.pending;
export const getSightingsError = (state) => state.error;
export const addSighting = (state) => state.sightings;
