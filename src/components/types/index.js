import {PropTypes, shape} from "prop-types";

export const appType = shape({
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const mainPageType = shape({
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const movieListItemType = PropTypes.string.isRequired;

export const movieListType = PropTypes.arrayOf(movieListItemType).isRequired;

export const movieCardTopType = shape({
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
});

export const genresListItemType = PropTypes.string.isRequired;

export const genresListType = PropTypes.arrayOf(genresListItemType).isRequired;

export const catalogType = shape({
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
});
