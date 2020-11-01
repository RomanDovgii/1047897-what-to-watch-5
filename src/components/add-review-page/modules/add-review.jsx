import React from "react";
import {UserRating} from "../../../utils/const";
import {addReviewType} from "../../types/types";

const AddReview = (props) => {
  const {handleChange, handleSubmit, rating, review} = props;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {new Array(UserRating.MAXIMUM).fill().map((currentElement, i) => {
              const index = i + 1;

              return (
                <React.Fragment key={`key-${index}`}>
                  <input
                    className="rating__input"
                    id={`star-${index}`}
                    type="radio"
                    name="rating"
                    value={`${index}`}
                    key={`star-${index}`}
                    checked={`${index}` === rating}
                    onChange={handleChange}
                  />
                  <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review"
            id="review-text"
            placeholder="Review text"
            value={review}
            onChange={handleChange}
          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReview.propTypes = addReviewType;

export default AddReview;
