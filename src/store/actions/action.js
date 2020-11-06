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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});
