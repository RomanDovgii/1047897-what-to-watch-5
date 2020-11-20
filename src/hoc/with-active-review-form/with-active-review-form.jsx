import React, {useState} from "react";
import {UserRating, ReviewLength} from "../../utils/const";

const withActiveReviewForm = (Component) => {
  const WithActiveReviewForm = (props) => {
    const [rating, changeRating] = useState(`${UserRating.DEFAULT}`);
    const [review, changeReview] = useState(``);
    const [isRatingFilled, changeIsRatingFilled] = useState(false);
    const [isReviewFilled, changeIsReviewFilled] = useState(false);
    const [isFormLocked, changeIsFormLocked] = useState(false);

    return (
      <Component
        {...props}
        onRatingChange={(evt) => {
          const {value} = evt.target;

          changeRating(value);
          changeIsRatingFilled(true);
        }}
        onReviewChange={(evt) => {
          const {value} = evt.target;

          changeReview(value);
          changeIsReviewFilled(value.length > ReviewLength.MINIMUM && value.length < ReviewLength.MAXIMUM ? true : false);
        }}
        isReviewFilled={isReviewFilled}
        isRatingFilled={isRatingFilled}
        isFormLocked={isFormLocked}
        rating={rating}
        review={review}
        onChangeFormLock={() => {
          changeIsFormLocked(!isFormLocked);
        }}
      />
    );
  };

  WithActiveReviewForm.propTypes = {};

  return WithActiveReviewForm;
};

export default withActiveReviewForm;
