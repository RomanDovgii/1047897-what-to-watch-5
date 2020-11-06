import React from "react";
import {generateDurationString} from "../../utils/utils";
import {tabType} from "../types/types";

export const generateActorsText = (starring) => {
  const actorsMaxIndex = starring.length - 1;

  return (
    <span className="movie-card__details-value">
      {starring.map((actor, i) => (
        <React.Fragment key={i}>
          {actor}{i < actorsMaxIndex ? `, ` : ``} {i < actorsMaxIndex ? <br/> : ``}
        </React.Fragment>
      ))}
    </span>);
};

const DetailsTab = (props) => {
  const {movie} = props;

  const {genre, released, director, starring, runTime} = movie;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          {generateActorsText(starring)}
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{generateDurationString(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

DetailsTab.propTypes = tabType;

export default DetailsTab;
