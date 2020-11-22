import React from "react";
import Comment from "../comment/comment";
import {tabWithCommentsType} from "../types/types";
import {calculateTextInputColor} from "../../utils/utils";

const ReviewsTab = (props) => {
  const {comments, movie} = props;

  const {backgroundColor} = movie;

  const commentsForTheMovie = comments;
  const commentsFirstColumn = Math.ceil(commentsForTheMovie.length / 2);

  const firstColumnComments = commentsForTheMovie.slice().slice(0, commentsFirstColumn);
  const secondColumnComments = commentsForTheMovie.slice().slice(commentsFirstColumn, commentsForTheMovie.length);
  const borderBottomStyle = {borderBottom: `2px solid ${calculateTextInputColor(backgroundColor)}`};

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstColumnComments.map((comment, i) => {
          return (
            <Comment
              commentData = {comment}
              borderBottomStyle = {(firstColumnComments.length > 1) && (i !== firstColumnComments.length - 1) ? borderBottomStyle : {}}
              key = {`${comment.user.name.replace(` `, ``).toLowerCase()}-${i}`}
            />
          );
        })}
      </div>
      <div className="movie-card__reviews-col">
        {secondColumnComments.map((comment, i) => {
          return (
            <Comment
              commentData = {comment}
              borderBottomStyle = {(secondColumnComments.length > 1) && (i !== secondColumnComments.length - 1) ? borderBottomStyle : {}}
              key = {`${comment.user.name.replace(` `, ``).toLowerCase()}-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};

ReviewsTab.propTypes = tabWithCommentsType;

export default ReviewsTab;
