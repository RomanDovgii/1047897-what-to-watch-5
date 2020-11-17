import React from "react";
import {commentType} from "../../types/types";

const Comment = (props) => {
  const {commentData} = props;

  const {comment, rating, user, date} = commentData;

  const ratingString = `${rating}`.replace(`.`, `,`);

  const localDate = new Date(date);

  const year = localDate.getFullYear();
  const day = localDate.getDate();
  const monthName = localDate.toLocaleString(`default`, {month: `long`});

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={`${date}`}>{monthName} {day}, {year}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ratingString}</div>
    </div>
  );
};

Comment.propTypes = commentType;

export default Comment;
