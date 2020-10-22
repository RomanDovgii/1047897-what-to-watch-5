import React from "react";
import {MovieScreenTab, MAXIMUM_DISPLAYED_ACTORS, RatingSystem} from "../../utils/const";
import {tabsType} from "../types/types";
import {comments} from "../../mocks/comments";
import Comment from "./modules/comment";

const generateStarringString = (actors) => {
  let text = ``;
  let end = ``;
  let actorsLocal = actors.slice();

  if (actorsLocal.length > MAXIMUM_DISPLAYED_ACTORS) {
    actorsLocal = actors.slice(0, MAXIMUM_DISPLAYED_ACTORS);

    end = ` and other`;
  }

  text = actorsLocal.join(`, `);

  text = text.slice(0, -2);

  text += end;

  return text;
};

const generateRatingText = (rating) => {
  switch (true) {
    case rating <= RatingSystem.BAD:
      return `Bad`;
    case rating <= RatingSystem.NORMAL:
      return `Normal`;
    case rating <= RatingSystem.GOOD:
      return `Good`;
    case rating < RatingSystem.AWESOME:
      return `Very good`;
    case rating === RatingSystem.AWESOME:
      return `Awesome`;
    default:
      return `Rating is incorrect`;
  }
};

const generateActorsText = (actors) => {
  const actorsMaxIndex = actors.length - 1;

  return (<span className="movie-card__details-value">
    {actors.map((actor, i) => (
      <React.Fragment key={i}>
        {actor}{i < actorsMaxIndex ? `, ` : ``} {i < actorsMaxIndex ? <br/> : ``}
      </React.Fragment>
    ))}
  </span>);
};

const generateDurationString = (duration) => {
  return `${Math.floor(duration / 60)}h ${duration % 60}m`;
};

const Tabs = (props) => {
  const {screen, movie} = props;

  const {genre, release, descriptionParagraphs, director, actors, rating, duration, id} = movie;

  const commentsForTheMovie = comments[id];
  const commentsFirstColumn = Math.ceil(commentsForTheMovie.length / 2);

  const firstColumnComments = commentsForTheMovie.slice().slice(0, commentsFirstColumn);
  const secondColumnComments = commentsForTheMovie.slice().slice(commentsFirstColumn, commentsForTheMovie.length);

  const ratingString = `${rating}`.replace(`.`, `,`);

  switch (screen) {
    case MovieScreenTab.OVERVIEW:
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

    case MovieScreenTab.DETAILS:
      return (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              {generateActorsText(actors)}
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{generateDurationString(duration)}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{release}</span>
            </p>
          </div>
        </div>
      );

    case MovieScreenTab.REVIEWS:
      return (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {firstColumnComments.map((comment, i) => {
              return (
                <Comment
                  comment = {comment}
                  key = {`${comment.name.replace(` `, ``).toLowerCase()}-${i}`}
                />
              );
            })}
          </div>
          <div className="movie-card__reviews-col">
            {secondColumnComments.map((comment, i) => {
              return (
                <Comment
                  comment = {comment}
                  key = {`${comment.name.replace(` `, ``).toLowerCase()}-${i}`}
                />
              );
            })}
          </div>
        </div>
      );
  }

  return null;
};

Tabs.propTypes = tabsType; // update this later

export default Tabs;
