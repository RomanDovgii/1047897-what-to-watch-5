import React from "react";
import MoviesListItem from "./movies-list-item";
import {listType} from "../../types/index";

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

MoviesList.propTypes = listType.isRequired;

export default MoviesList;
