import React from "react";
import MoviesListItem from "./movies-list-item";
import {movieListType} from "../../types/index";

const MoviesList = (props) => {
  const movieList = props;

  return (
    <div className="catalog__movies-list">
      {movieList.movies.map((movie, index) => {
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
  movieList: movieListType
};

export default MoviesList;
