import React from "react";
import {connect} from "react-redux";
import {UserRating} from "../../utils/const";
import {addReviewType} from "../types/types";
import {addReview} from "../../store/actions/api-actions";
import {calculateTextInputColor} from "../../utils/utils";

const AddReviewForm = (props) => {
  const {onRatingChange, onReviewChange, backgroundColor, isReviewFilled, isRatingFilled, isFormLocked, rating, review, id, onSubmit, onChangeFormLock} = props;

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          const reviewData = {
            "rating": rating,
            "comment": review
          };
          onChangeFormLock();
          onSubmit(id, onChangeFormLock, reviewData);
        }}
        disabled={isFormLocked}>
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
                    onChange={onRatingChange}
                    disabled={isFormLocked}
                  />
                  <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div
          className="add-review__text"
          style={{backgroundColor: `${calculateTextInputColor(backgroundColor)}`}}>
          <textarea
            className="add-review__textarea"
            name="review"
            id="review-text"
            placeholder="Review text"
            value={review}
            onChange={onReviewChange}
            disabled={isFormLocked}
          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isReviewFilled && isRatingFilled && !isFormLocked ? false : true}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = addReviewType;

export {AddReviewForm};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, isLocked, reviewInfo) {
    dispatch(addReview(id, isLocked, reviewInfo));
  }
});

export default connect(null, mapDispatchToProps)(AddReviewForm);
