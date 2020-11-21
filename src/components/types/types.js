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
});

const errorObjectType = PropTypes.shape({
  code: PropTypes.string,
  text: PropTypes.string
});

const packedErrorType = {
  error: errorObjectType,
};

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

export const onWTWLogoClickType = {
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

const imageNameType = {
  imageName: PropTypes.string.isRequired
};

const isPlayingType = {
  isPlaying: PropTypes.bool.isRequired
};

const videoUrlType = {
  videoUrl: PropTypes.string.isRequired
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

const selectedMovieType = {
  selectedMovieType: movieObjectType
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

const isErrorType = {
  isError: PropTypes.bool.isRequired
};

const backgroundImageType = {
  backgroundImage: PropTypes.string.isRequired
};

const nameType = {
  name: PropTypes.string.isRequired
};

const posterType = {
  poster: PropTypes.string.isRequired
};

const onRatingChangeType = {
  onRatingChange: functionType
};

const onReviewChangeType = {
  onReviewChange: functionType
};

const backgroundColorType = {
  backgroundColor: PropTypes.string.isRequired
};

const isReviewFilledType = {
  isReviewFilled: PropTypes.bool.isRequired
};

const isRatingFilledType = {
  isRatingFilled: PropTypes.bool.isRequired
};

const isFormLockedType = {
  isFormLocked: PropTypes.bool.isRequired
};

const optionalIdType = {
  id: PropTypes.string
};

const onChangeFormLockType = {
  onChangeFormLock: functionType
};

const onClickType = {
  onClick: functionType
};

const onMouseEnterType = {
  onMouseEnter: functionType
};

const onMouseLeaveType = {
  onMouseLeave: functionType
};

export const testChildrenType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const onCloseButtonClickType = {
  onCloseButtonClick: functionType
};

export const smallMovieCardType = Object.assign({}, movieType, renderPlayerType, isPlayingType, onClickType, onMouseEnterType, onMouseLeaveType);
export const promotedMovieMoviesCommentsType = Object.assign({}, movieType, moviesType, commentsType);

export const mainPageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType);
export const moviePageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, moviesType, commentsType);
export const movieCardTopType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, movieType, commentsType);
export const headerType = Object.assign({}, onUserIconClickType, headerSettingsType);
export const userBlockType = Object.assign({}, onUserIconClickType, isRenderedType);
export const catalogType = Object.assign({}, headingType, moviesType, optionalGenresType);
export const moreButtonType = Object.assign({}, headingType, moviesCountType, onMoreButtonClickType);
export const myListPageType = Object.assign({}, onUserIconClickType, onWTWLogoClickType);
export const movieCardType = Object.assign({}, onUserIconClickType, onWTWLogoClickType, onPlayButtonClickType, selectedMovieType, commentsType);
export const tabsType = Object.assign({}, screenTabType, movieType, commentsType);
export const tabType = Object.assign({}, movieType);
export const tabWithCommentsType = Object.assign({}, movieType, commentsType);
export const genresListType = Object.assign({}, genresType, selectedGenreType, onGenreClick);
export const genreListItemType = Object.assign({}, genreType, onGenreClick, isSelected);
export const logoType = Object.assign({}, onWTWLogoClickType, resetStateType);
export const withActiveCardType = Object.assign({}, movieType, renderPlayerType);
export const withActivePlayerType = Object.assign({}, imageNameType, isPlayingType, videoUrlType);
export const withActiveTabsType = Object.assign({}, commentsType, onPlayButtonClickType, onUserIconClickType, onWTWLogoClickType, selectedMovieType);
export const addReviewType = Object.assign({}, onRatingChangeType, onReviewChangeType, backgroundColorType, isReviewFilledType, isRatingFilledType, isFormLockedType, ratingType, reviewType, optionalIdType, onSubmitType, onChangeFormLockType);
export const playerControlsType = Object.assign({}, onPlayButtonClickType, onFullScreenButtonClickType, isPlayingType, isLoadingType, durationType, currentTimeType);
export const playerPageType = Object.assign({}, selectedMovieType, isPlayingType, onExitButtonClickType, onPlayButtonClickType);
export const privateRouteType = Object.assign({}, authoriationStatusType, exactType, pathType, renderType);
export const signInType = Object.assign({}, onSubmitType, isErrorType);
export const movieCardBackgroundType = Object.assign({}, backgroundImageType, nameType);
export const moviePosterType = Object.assign({}, posterType, nameType);
export const errorType = Object.assign({}, packedErrorType, isErrorType, onCloseButtonClickType);
