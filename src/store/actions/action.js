import {ActionType, SHOWN_MOVIES_COUNT} from "../../utils/const";

export const changeGenre = (selectedGenre) => ({
  type: ActionType.SELECT_GENRE,
  payload: selectedGenre
});

export const showMore = () => ({
  type: ActionType.SHOW_MORE,
  payload: SHOWN_MOVIES_COUNT
});

export const resetShownMovies = () => ({
  type: ActionType.RESET_SHOWN_MOVIES
});

export const startPlaying = () => ({
  type: ActionType.START_PLAYING
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies
});

export const loadPromotedMovie = (movie) => ({
  type: ActionType.LOAD_PROMOTED_MOVIE,
  payload: movie
});

export const loadSelectedMovie = (movie) => ({
  type: ActionType.LOAD_SELECTED_MOVIE,
  payload: movie
});

export const loadSelectedMovieComments = (comments) => ({
  type: ActionType.LOAD_SELECTED_MOVIE_COMMENTS,
  payload: comments
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const selectMovie = (movie) => ({
  type: ActionType.SELECT_MOVIE,
  payload: movie
});

export const updateUserInfo = (userInfo) => ({
  type: ActionType.UPDATE_USER_INFO,
  payload: userInfo
});

export const throwErr = () => ({
  type: ActionType.THROW_ERR
});

export const removeErr = () => ({
  type: ActionType.REMOVE_ERR
});

export const addMovieToFavoriteLocal = (movieId) => ({
  type: ActionType.ADD_MOVIE_TO_FAVORITE,
  payload: movieId
});

export const createError = (error) => ({
  type: ActionType.CREATE_ERR,
  payload: error
});

export const flushError = () => ({
  type: ActionType.FLUSH_ERR
});

export const flushSelectedMovie = () => ({
  type: ActionType.FLUSH_SELECTED_MOVIE
});
