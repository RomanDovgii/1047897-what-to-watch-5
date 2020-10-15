import PropTypes from "prop-types";

const onMouseEnterType = {
  onMouseEnter: PropTypes.func.isRequired
};

const onMouseLeaveType = {
  onMouseLeave: PropTypes.func.isRequired
};

export const headingType = {
  heading: PropTypes.string.isRequired
};

export const movieType = PropTypes.shape({
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

export const moviesType = {
  movies: PropTypes.arrayOf(movieType).isRequired
};

export const listItemType = PropTypes.string.isRequired;
const optionalListItemType = PropTypes.string;

export const listType = PropTypes.arrayOf(listItemType).isRequired;

const optionalGenresType = {
  genres: PropTypes.arrayOf(optionalListItemType)
};

export const movieCardTopType = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export const catalogType = Object.assign({}, headingType, moviesType, optionalGenresType);
export const moreButtonType = Object.assign({}, headingType, moviesType);
export const smallMovieCardType = Object.assign({}, onMouseEnterType, onMouseLeaveType, movieType);

export const optionalElementType = {
  isRendered: PropTypes.bool
};

export const headerType = {
  isUserPage: PropTypes.bool,
  isMyList: PropTypes.bool,
  isSignIn: PropTypes.bool,
  isNavigation: PropTypes.bool,
  isUserBlock: PropTypes.bool
};
