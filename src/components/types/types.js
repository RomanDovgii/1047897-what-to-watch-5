import PropTypes from "prop-types";

export const movieType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  ratingsCount: PropTypes.number.isRequired,
  videoUrl: PropTypes.string.isRequired
}).isRequired;

export const moviesType = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType).isRequired).isRequired
};

export const listItemType = PropTypes.string.isRequired;

export const listType = PropTypes.arrayOf(listItemType).isRequired;

export const movieCardTopType = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export const catalogType = Object.assign({}, listType, moviesType);

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
