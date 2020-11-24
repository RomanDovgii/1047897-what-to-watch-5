export const SHOWN_MOVIES_COUNT = 8;
export const MAXIMUM_DISPLAYED_ACTORS = 4;
export const MAXIMUM_DISPLAYED_MOVIES = 8;
export const HOURS_IN_SECONDS = 3600;
export const MINUTES_IN_SECONDS = 60;
export const COLOR_DIFFERENCE = 0x71312;
export const ZERO = 0;
export const ALL_GENRE = `All genres`;

export const CatalogHeadingVariant = {
  CATALOG: `Catalog`,
  MOVIE_PAGE: `More like this`
};

export const UserRating = {
  MINIMUM: 1,
  DEFAULT: 3,
  MAXIMUM: 5
};

export const MoreLikeThis = {
  FIRST_INDEX: 0,
  LAST_INDEX: 4
};

export const RatingSystem = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  AWESOME: 10
};

export const ReviewLength = {
  MINIMUM: 50,
  MAXIMUM: 400
};

export const MovieScreenTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  RESET_SHOWN_MOVIES: `RESET_SHOWN_MOVIES`,
  START_PLAYING: `START_PLAYING`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMOTED_MOVIE: `LOAD_PROMOTED_MOVIE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SELECT_MOVIE: `SELECT_MOVIE`,
  UPDATE_USER_INFO: `UPDATE_USER_INFO`,
  THROW_ERR: `THROW_ERR`,
  REMOVE_ERR: `REMOVE_ERR`,
  LOAD_SELECTED_MOVIE: `LOAD_SELECTED_MOVIE`,
  LOAD_SELECTED_MOVIE_COMMENTS: `LOAD_SELECTED_MOVIE_COMMENTS`,
  ADD_MOVIE_TO_FAVORITE: `ADD_MOVIE_TO_FAVORITE`,
  CREATE_ERR: `CREATE_ERR`,
  FLUSH_ERR: `FLUSH_ERR`,
  FLUSH_SELECTED_MOVIE: `FLUSH_SELECTED_MOVIE`
};

export const CatalogCallSource = {
  MAIN_PAGE: `MAIN_PAGE`,
  MY_LIST: `MY_LIST`,
  MOVIE_PAGE: `MOVIE_PAGE`
};

export const ApiInformation = {
  BASE_URL: `https://5.react.pages.academy/wtw`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
};

export const HttpCode = {
  UNAUTHORIZED: 401
};

export const AuthorizationStatus = {
  AUTH: true,
  NO_AUTH: false
};

export const AppRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`
};

export const APIRoute = {
  FILMS: `/films`,
  PROMOTED_MOVIE: `/films/promo`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`
};

export const HeaderHeadingVariant = {
  SIGN_IN: `Sign in`,
  MY_LIST: `My list`
};
