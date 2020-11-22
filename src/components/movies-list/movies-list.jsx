import React from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {moviesType} from "../types/types";
import withActiveCard from "../../hoc/with-active-card/with-active-card";
import withActivePlayer from "../../hoc/with-active-player/with-active-player";

const SmallMovieCardWrapper = withActivePlayer(withActiveCard(SmallMovieCard));

const MoviesList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) => {
        return (
          <SmallMovieCardWrapper
            key = {`${movie.name.trim()}-${index}`}
            movie = {movie}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = moviesType;

export default MoviesList;
