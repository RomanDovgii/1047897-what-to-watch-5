import React from "react";
import {generateRatingText, generateStarringString} from "../../utils/utils";
import {tabWithCommentsType} from "../types/types";

const OverviewTab = (props) => {
  const {movie, comments} = props;

  const {descriptionParagraphs, director, actors, rating, id} = movie;

  const ratingString = `${rating}`.replace(`.`, `,`);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingString}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{generateRatingText(rating)}</span>
          <span className="movie-rating__count">{comments[id].length} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {descriptionParagraphs.map((paragraph, i) => (
          <p key={`paragraph-${i}`}>{paragraph}</p>
        ))}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {generateStarringString(actors)}</strong></p>
      </div>
    </React.Fragment>
  );
};

OverviewTab.propTypes = tabWithCommentsType;

export default OverviewTab;
