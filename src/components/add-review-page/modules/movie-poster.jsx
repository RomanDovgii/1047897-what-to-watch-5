import React from "react";

const MoviePoster = (props) => {
  const {poster, name} = props;

  return (
    <div className="movie-card__poster movie-card__poster--small">
      <img src={poster} alt={name} width="218" height="327" />
    </div>
  );
};

export default MoviePoster;
