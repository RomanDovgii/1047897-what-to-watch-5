import React from "react";
import PropTypes from "prop-types";
import MoviesListItem from "./movies-list-item";

const MoviesList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) => {
        return (
          <MoviesListItem
            key = {index.toString()}
            movie = {movie}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
