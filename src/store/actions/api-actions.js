import {loadMovies, loadPromotedMovie, loadSelectedMovie, requireAuthorization, redirectToRoute, updateUserInfo, loadSelectedMovieComments, throwErr, removeErr, addMovieToFavoriteLocal} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../../utils/const";

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadMovies(data));
    })
);

export const fetchPromotedMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMOTED_MOVIE)
    .then(({data}) => {
      dispatch(loadPromotedMovie(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      dispatch(updateUserInfo({
        userId: response.data.id,
        avatarUrl: response.data.avatar_url
      }));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(removeErr());
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {
      dispatch(throwErr());
    })
);

export const fetchSelectedMovie = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/${movieId}`)
    .then((response) => {
      dispatch(loadSelectedMovie(response.data));
    })
);

export const fetchSelectedMovieComments = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + `/${movieId}`)
    .then((response) => {
      dispatch(loadSelectedMovieComments(response.data));
    })
);

export const addMovieToFavorite = (movieId, movieStatus) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE + `/${movieId}/${movieStatus ? 1 : 0}`)
    .then((response) => {
      console.log(movieStatus);
      console.log(response);
      dispatch(addMovieToFavoriteLocal(movieId));
    })
    .catch((err) => {
      throw err;
    })
);

