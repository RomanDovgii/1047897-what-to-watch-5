import React from "react";
import {movieCardBackgroundType} from "../types/types";

const AddReviewBackground = (props) => {
  const {backgroundImage, name} = props;

  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
};

AddReviewBackground.propTypes = movieCardBackgroundType;

export default AddReviewBackground;
