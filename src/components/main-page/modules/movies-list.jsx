import React from "react";
import MoviesListItem from "./movies-list-item";
import {movieListType} from "../../types/index";

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

MoviesList.propTypes = movieListType.isRequired;

export default MoviesList;
