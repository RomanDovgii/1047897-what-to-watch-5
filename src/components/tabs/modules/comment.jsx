import React from "react";
import {commentType} from "../../types/types";

const Comment = (props) => {
  const {commentData} = props;

  const {comment, rating, user, date} = commentData;

  const ratingString = `${rating}`.replace(`.`, `,`);

  // const year = date.getFullYear();
  // const day = date.getDate();
  // const monthNumerical = date.getMonth() + 1;
  // const monthName = date.toLocaleString(`default`, {month: `long`});

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={`${date}`}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ratingString}</div>
    </div>
  );
};

Comment.propTypes = commentType;

export default Comment;
