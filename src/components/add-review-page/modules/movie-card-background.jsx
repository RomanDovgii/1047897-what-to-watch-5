import React from "react";
import {movieCardBackgroundType} from "../../types/types";

const MovieCardBackground = (props) => {
  const {backgroundImage, name} = props;

  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
};

MovieCardBackground.propTypes = movieCardBackgroundType;

export default MovieCardBackground;
