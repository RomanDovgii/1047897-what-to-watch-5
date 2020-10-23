import React from "react";
import Comment from "../tabs/modules/comment";
import {tabWithCommentsType} from "../types/types";

const ReviewsTab = (props) => {
  const {movie, comments} = props;

  const {id} = movie;

  const commentsForTheMovie = comments[id];
  const commentsFirstColumn = Math.ceil(commentsForTheMovie.length / 2);

  const firstColumnComments = commentsForTheMovie.slice().slice(0, commentsFirstColumn);
  const secondColumnComments = commentsForTheMovie.slice().slice(commentsFirstColumn, commentsForTheMovie.length);

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
};

ReviewsTab.propTypes = tabWithCommentsType;

export default ReviewsTab;
