import { FETCH_MOVIE_START, FETCH_MOVIE_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  movieData: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_START:
      return { ...state, loading: true };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, movieData: action.payload, loading: false };
    default:
      return state;
  }
};
