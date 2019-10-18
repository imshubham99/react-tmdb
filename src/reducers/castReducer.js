import { FETCH_CAST_START, FETCH_CAST_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  cast: [],
  castLoading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAST_START:
      return { ...state, castLoading: true };
    case FETCH_CAST_SUCCESS:
      return { ...state, cast: action.payload, castLoading: false };
    default:
      return state;
  }
};
