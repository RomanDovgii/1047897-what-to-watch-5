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
const functionType = PropTypes.func.isRequired;
const requiredString = PropTypes.string.isRequired;

export const movieObjectType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: requiredString,
  posterImage: requiredString,
  backgroundImage: requiredString,
  backgroundColor: requiredString,
  videoLink: requiredString,
  previewVideoLink: requiredString,
  description: requiredString,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: requiredString,
  starring: PropTypes.arrayOf(requiredString).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: requiredString,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired

}).isRequired;

export const commentType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
}).isRequired;

const commentsType = PropTypes.objectOf(commentType).isRequired;

export const movieType = {
  movie: movieObjectType
};

export const onExitButtonClickType = {
  onExitButtonClick: functionType
};

export const onUserIconClickType = {
  onUserIconClick: optionalFunctionType
};

const onPlayButtonClickType = {
  onPlayButtonClick: optionalFunctionType
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

const genreType = {
  genre: listItemType
};

const genresType = {
  genres: PropTypes.arrayOf(listItemType).isRequired
};

const selectedGenreType = {
  selectedGenre: PropTypes.string.isRequired
};

const onGenreClick = {
  onGenreClick: functionType
};

const isSelected = {
  isSelected: PropTypes.bool.isRequired
};

export const videoPlayerType = {
  videoUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  callSource: PropTypes.string.isRequired
};

export const screenTabType = {
  screen: PropTypes.string.isRequired
};

const moviesCountType = {
  moviesCount: PropTypes.number.isRequired
};

const onMoreButtonClickType = {
  onMoreButtonClick: functionType
};

const onWTWLogoClickType = {
  onWTWLogoClick: functionType
};

const resetStateType = {
  resetState: functionType
};

export const childrenType = {
  children: PropTypes.node.isRequired
};

const renderPlayerType = {
  renderPlayer: functionType
};

const callSourceType = {
  callSource: PropTypes.string.isRequired
};

const imageNameType = {
  imageName: PropTypes.string.isRequired
};

const isPlayingType = {
  isPlaying: PropTypes.bool.isRequired
};

const videoUrlType = {
  videoUrl: PropTypes.string.isRequired
};

const onChangeType = {
  onChange: functionType
};

const onSubmitType = {
  onSubmit: functionType
};

const ratingType = {
  rating: PropTypes.string.isRequired
};

const reviewType = {
  review: PropTypes.string.isRequired
};

const onFullScreenButtonClickType = {
  onFullScreenButtonClick: functionType
};

const isLoadingType = {
  isLoading: PropTypes.bool.isRequired
};

const durationType = {
  duration: PropTypes.number.isRequired
};

const currentTimeType = {
  currentTime: PropTypes.number.isRequired
};

export const onBigPlayButtonClickType = {
  onBigPlayButtonClick: functionType
};

const selectedMovie = {
  selectedMovie: movieObjectType
};

const authoriationStatusType = {
  authorizationStatus: PropTypes.bool.isRequired
};

const exactType = {
  exact: PropTypes.bool.isRequired
};

const pathType = {
  path: PropTypes.string.isRequired
};

const renderType = {
  render: functionType
};

export const smallMovieCardType = Object.assign({}, movieObjectType);
export const promotedMovieMoviesCommentsType = Object.assign({}, movieObjectType, moviesType, commentsType);

export const mainPageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType);
export const moviePageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, selectedMovie, moviesType, commentsType);
export const movieCardTopType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, movieType, commentsType);
export const headerType = Object.assign({}, onUserIconClickType, headerSettingsType);
export const userBlockType = Object.assign({}, onUserIconClickType, isRenderedType);
export const catalogType = Object.assign({}, headingType, moviesType, optionalGenresType);
export const moreButtonType = Object.assign({}, headingType, moviesCountType, onMoreButtonClickType);
export const myListPageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType);
export const movieCardType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, selectedMovie, commentsType);
export const tabsType = Object.assign({}, screenTabType, movieObjectType, commentsType);
export const tabType = Object.assign({}, movieObjectType);
export const tabWithCommentsType = Object.assign({}, movieObjectType, commentsType);
export const genresListType = Object.assign({}, genresType, selectedGenreType, onGenreClick);
export const genreListItemType = Object.assign({}, genreType, onGenreClick, isSelected);
export const logoType = Object.assign({}, onWTWLogoClickType, resetStateType);
export const withActiveCardType = Object.assign({}, movieType, renderPlayerType);
export const withActivePlayerType = Object.assign({}, callSourceType, imageNameType, isPlayingType, videoUrlType);
export const withActiveTabsType = Object.assign({}, commentsType, onPlayButtonClickType, onUserIconClickType, onWTWLogoClickType, selectedMovie);
export const addReviewType = Object.assign({}, ratingType, reviewType, onChangeType, onSubmitType);
export const playerControlsType = Object.assign({}, onPlayButtonClickType, onFullScreenButtonClickType, isPlayingType, isLoadingType, durationType, currentTimeType);
export const playerPageType = Object.assign({}, movieType, isPlayingType, onExitButtonClickType, onPlayButtonClickType);
export const privateRouteType = Object.assign({}, authoriationStatusType, exactType, pathType, renderType);
