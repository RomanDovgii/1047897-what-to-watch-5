import React from "react";
import SmallMovieCard from "../../small-movie-card/small-movie-card";
import {moviesType} from "../../types/types";
import withVideoPlayer from "../../../hoc/with-video-player/with-video-player";
import withActiveCard from "../../../hoc/with-active-card/with-active-card";

const SmallMovieCardWrapper = withVideoPlayer(withActiveCard(SmallMovieCard));

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
