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
  duration: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  isMyList: PropTypes.bool.isRequired
}).isRequired;

export const commentType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
}).isRequired;

const commentsType = PropTypes.objectOf(commentType).isRequired;

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
const ListItemType = PropTypes.string.isRequired;

export const optionalGenresType = {
  genres: PropTypes.arrayOf(optionalListItemType)
};

export const optionalGenreType = {
  genre: optionalListItemType
};

const genreType = {
  genre: listItemType
};

const genresType = {
  genres: PropTypes.arrayOf(ListItemType).isRequired
};

const selectedGenreType = {
  selectedGenre: PropTypes.string.isRequired
};

const onGenreClick = {
  onGenreClick: PropTypes.func.isRequired
};

const isSelected = {
  isSelected: PropTypes.bool.isRequired
};

export const videoPlayerType = {
  videoUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  callSource: PropTypes.string.isRequired
};

export const ScreenTabType = {
  screen: PropTypes.string.isRequired
};

const moviesCountType = {
  moviesCount: PropTypes.number.isRequired
};

const onMoreButtonClickType = {
  onMoreButtonClick: PropTypes.func.isRequired
};

const onWTWLogoClickType = {
  onWTWLogoClick: PropTypes.func.isRequired
};

const resetStateType = {
  resetState: PropTypes.func.isRequired
};

export const smallMovieCardType = Object.assign({}, onMouseEnterType, onMouseLeaveType, movieObjectType);
export const promotedMovieMoviesCommentsType = Object.assign({}, movieObjectType, moviesType, commentsType);

export const mainPageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, promotedMovieType, moviesType);
export const moviePageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, promotedMovieType, moviesType, commentsType);
export const movieCardTopType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, movieType, commentsType);
export const headerType = Object.assign({}, onUserIconClickType, headerSettingsType);
export const userBlockType = Object.assign({}, onUserIconClickType, isRenderedType);
export const catalogType = Object.assign({}, headingType, moviesType, optionalGenresType);
export const moreButtonType = Object.assign({}, headingType, moviesCountType, onMoreButtonClickType);
export const myListPageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, moviesType);
export const movieCardType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, promotedMovieType, commentsType);
export const tabsType = Object.assign({}, ScreenTabType, movieObjectType, commentsType);
export const tabType = Object.assign({}, movieObjectType);
export const tabWithCommentsType = Object.assign({}, movieObjectType, commentsType);
export const genresListType = Object.assign({}, genresType, selectedGenreType, onGenreClick);
export const genreListItemType = Object.assign({}, genreType, onGenreClick, isSelected);
export const logoType = Object.assign({}, onWTWLogoClickType, resetStateType);
