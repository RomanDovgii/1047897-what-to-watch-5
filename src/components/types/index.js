import PropTypes from "prop-types";

export const appType = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export const movieListItemType = PropTypes.string.isRequired;

export const movieListType = PropTypes.arrayOf(movieListItemType).isRequired;

export const movieCardTopType = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export const genresListItemType = PropTypes.string.isRequired;

export const genresListType = PropTypes.arrayOf(genresListItemType).isRequired;

export const catalogType = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};
