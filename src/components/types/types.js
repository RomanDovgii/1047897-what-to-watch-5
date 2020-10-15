import PropTypes from "prop-types";

const headerSettingsType = {
  isUserPage: PropTypes.bool,
  isMyList: PropTypes.bool,
  isSignIn: PropTypes.bool,
  isNavigation: PropTypes.bool,
  isUserBlock: PropTypes.bool
};

export const isRenderedType = {
  isRendered: PropTypes.bool.isRequired
};

const optionalFunctionType = PropTypes.func;
const FunctionType = PropTypes.func.isRequired;

export const movieObjectType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  descriptionParagraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  ratingsCount: PropTypes.number.isRequired,
  videoUrl: PropTypes.string.isRequired,
  isMyList: PropTypes.bool.isRequired
}).isRequired;

const movieType = {
  movie: movieObjectType
};

const onMouseEnterType = {
  onMouseEnter: optionalFunctionType
};

const onMouseLeaveType = {
  onMouseLeave: optionalFunctionType
};

export const onExitButtonClickType = {
  onExitButtonClick: FunctionType
};

export const onUserIconClickType = {
  onUserIconClick: optionalFunctionType
};

const onPlayButtonClickType = {
  onPlayButtonClick: optionalFunctionType
};

const promotedMovieType = {
  promotedMovie: movieObjectType
};

export const headingType = {
  heading: PropTypes.string.isRequired
};

export const moviesType = {
  movies: PropTypes.arrayOf(movieObjectType).isRequired
};

export const listItemType = PropTypes.string.isRequired;
const optionalListItemType = PropTypes.string;

export const optionalGenresType = {
  genres: PropTypes.arrayOf(optionalListItemType)
};

export const optionalGenreType = {
  genre: optionalListItemType
};


export const smallMovieCardType = Object.assign({}, onMouseEnterType, onMouseLeaveType, movieObjectType);
export const promotedMovieAndMoviesType = Object.assign({}, movieObjectType, moviesType);

export const mainPageType = Object.assign({}, onUserIconClickType, onPlayButtonClickType, promotedMovieType, moviesType);
export const movieCardTopType = Object.assign({}, onUserIconClickType, onPlayButtonClickType, movieType);
export const headerType = Object.assign({}, onUserIconClickType, headerSettingsType);
export const userBlockType = Object.assign({}, onUserIconClickType, isRenderedType);
export const catalogType = Object.assign({}, headingType, moviesType, optionalGenresType);
export const moreButtonType = Object.assign({}, headingType, moviesType);
export const myListPageType = Object.assign({}, onUserIconClickType, moviesType);
export const movieCardType = Object.assign({}, onUserIconClickType, onPlayButtonClickType, promotedMovieType);

