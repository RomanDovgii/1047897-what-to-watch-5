import {loadMovies, loadPromotedMovie, requireAuthorization, redirectToRoute, updateUserInfo} from "./action";
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
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((err) => {
      throw err;
    })
);
