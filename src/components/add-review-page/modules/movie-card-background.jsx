import React from "react";

const MovieCardBackground = (props) => {
  const {backgroundImage, name} = props;

  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
};

export default MovieCardBackground;
