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

export const movieListType = shape({
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const movieListItemType = shape({
  movie: PropTypes.string.isRequired
});

export const movieCardTopType = shape({
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
});

export const genresListType = shape({
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const genresListItemType = shape({
  genre: PropTypes.string.isRequired
});

export const catalogType = shape({
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
});
