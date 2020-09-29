import PropTypes from "prop-types";

export const appType = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export const listItemType = PropTypes.string.isRequired;

export const listType = PropTypes.arrayOf(listItemType).isRequired;

export const movieCardTopType = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export const catalogType = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};