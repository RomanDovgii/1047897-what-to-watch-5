import {loadMovies, loadPromotedMovie, loadSelectedMovie, requireAuthorization, redirectToRoute, updateUserInfo, loadSelectedMovieComments, removeErr, addMovieToFavoriteLocal, createError, flushError} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../../utils/const";

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadMovies(data));
    })
    .catch((err) => {
      dispatch(createError(err.response));
    })
);

export const fetchPromotedMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMOTED_MOVIE)
    .then(({data}) => {
      dispatch(loadPromotedMovie(data));
    })
    .catch((err) => {
      dispatch(createError(err.response));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      dispatch(flushError());
      dispatch(updateUserInfo({
        userId: response.data.id,
        avatarUrl: response.data.avatar_url
      }));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      dispatch(createError(err.response));
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      dispatch(flushError());
      dispatch(updateUserInfo({
        userId: response.data.id,
        avatarUrl: response.data.avatar_url
      }));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(removeErr());
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((err) => {
      dispatch(createError(err.response));
    })
);

export const fetchSelectedMovie = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/${movieId}`)
    .then((response) => {
      dispatch(loadSelectedMovie(response.data));
    })
    .catch((err) => {
      dispatch(createError(err.response));
    })
);

export const fetchSelectedMovieComments = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + `/${movieId}`)
    .then((response) => {
      dispatch(loadSelectedMovieComments(response.data));
    })
    .catch((err) => {
      dispatch(createError(err.response));
    })
);

export const addMovieToFavorite = (movieId, movieStatus) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE + `/${movieId}/${movieStatus ? 0 : 1}`)
    .then(() => {
      dispatch(addMovieToFavoriteLocal(movieId));
    })
    .catch((err) => {
      dispatch(createError(err.response));
    })
);

export const addReview = (movieId, changeFormLock, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + `/${movieId}`, {rating, comment})
    .then(() => {
      changeFormLock();
      dispatch(redirectToRoute(`/films/${movieId}`));
    })
    .catch((err) => {
      changeFormLock();
      dispatch(createError(err.response));
    })
);
