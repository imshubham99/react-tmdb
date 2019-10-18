import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_GENRE_BY_ID_START,
  FETCH_GENRE_BY_ID_SUCCESS,
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  movies: [],
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    case FETCH_GENRE_BY_ID_START:
      return { ...state, loading: true };
    case FETCH_GENRE_BY_ID_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    case SEARCH_MOVIE_START:
      return { ...state, loading: true };
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    default:
      return state;
  }
};
