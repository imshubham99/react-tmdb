import tmdb from "../apis/tmdb";
import {
  FETCH_GENRE_TYPES,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_GENRE_BY_ID_START,
  FETCH_GENRE_BY_ID_SUCCESS,
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_CAST_START,
  FETCH_CAST_SUCCESS,
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_SUCCESS
} from "./types";

const API_KEY = "e366d974f73ae203397850eadc7bce1f";

// INIT
export const init = () => async dispatch => {
  await dispatch(fetchGenreTypes());
};

// FETCH genres
export const fetchGenreTypes = () => async dispatch => {
  const response = await tmdb.get(`/genre/movie/list?api_key=${API_KEY}`);
  dispatch({ type: FETCH_GENRE_TYPES, payload: response.data.genres });
};

export const fetchGenreByIdStart = () => {
  return {
    type: FETCH_GENRE_BY_ID_START
  };
};
export const fetchGenreByIdSuccess = payload => {
  return {
    type: FETCH_GENRE_BY_ID_SUCCESS,
    payload: payload
  };
};
// FETCH perticular genre data
export const fetchGenreById = genreId => {
  return dispatch => {
    dispatch(fetchGenreByIdStart());
    tmdb
      .get(
        `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
      )
      .then(response => {
        dispatch(fetchGenreByIdSuccess(response.data.results));
      });
  };
};

// export const fetchGenreById = genreId => async dispatch => {
//   const response = await tmdb.get(
//     `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
//   );
//   dispatch({ type: FETCH_GENRE_BY_ID, payload: response.data.results });
// };

export const fetchMoviesStart = () => {
  return {
    type: FETCH_MOVIES_START
  };
};
export const fetchMoviesSuccess = payload => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: payload
  };
};

// fetch Discover Movie
export const fetchMovies = discoverType => {
  return dispatch => {
    dispatch(fetchMoviesStart());
    tmdb.get(`/movie/${discoverType}?api_key=${API_KEY}`).then(response => {
      dispatch(fetchMoviesSuccess(response.data.results));
    });
  };
};

// fetch Discover Movie
// export const fetchMovies = discoverType => async dispatch => {
//   const response = await tmdb.get(`/movie/${discoverType}?api_key=${API_KEY}`);
//   dispatch({ type: FETCH_MOVIES, payload: response.data.results });
// };

// export const initMovie = movieId => async dispatch => {
//   await dispatch(fetchMovieStart());
//   await dispatch(fetchMovie(movieId));
// };

export const fetchMovieStart = () => {
  return {
    type: FETCH_MOVIE_START
  };
};
export const fetchMovieSuccess = payload => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: payload
  };
};

export const searchMovieStart = () => {
  return {
    type: SEARCH_MOVIE_START
  };
};

export const searchMovieSuccess = payload => {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    payload: payload
  };
};

export const fetchCastStart = () => {
  return {
    type: FETCH_CAST_START
  };
};
export const fetchCastSuccess = payload => {
  return {
    type: FETCH_CAST_SUCCESS,
    payload: payload
  };
};

export const fetchMovie = movieId => {
  return dispatch => {
    dispatch(fetchMovieStart());
    tmdb
      .get(`/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`)
      .then(response => {
        dispatch(fetchMovieSuccess(response.data));
      });

    dispatch(fetchCastStart());
    tmdb.get(`/movie/${movieId}/credits?api_key=${API_KEY}`).then(response => {
      dispatch(fetchCastSuccess(response.data.cast));
    });
  };
};

export const searchMovie = movieName => {
  return dispatch => {
    dispatch(searchMovieStart());
    tmdb
      .get(`/search/movie?api_key=${API_KEY}&query=${movieName}`)
      .then(response => {
        dispatch(searchMovieSuccess(response.data.results));
      });
  };
};
