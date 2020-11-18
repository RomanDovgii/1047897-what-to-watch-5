import React from "react";
import {moviePosterType} from "../types/types";

const AddReviewPoster = (props) => {
  const {poster, name} = props;

  return (
    <div className="movie-card__poster movie-card__poster--small">
      <img src={poster} alt={name} width="218" height="327" />
    </div>
  );
};

AddReviewPoster.propTypes = moviePosterType;

export default AddReviewPoster;
