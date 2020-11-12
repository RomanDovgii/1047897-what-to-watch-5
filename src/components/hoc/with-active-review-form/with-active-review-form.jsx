import React, {PureComponent} from "react";
import {UserRating, ReviewLength} from "../../../utils/const";

const withActiveReviewForm = (Component) => {
  class WithActiveReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `${UserRating.DEFAULT}`,
        review: ``,
        isRatingFilled: false,
        isReviewFilled: false,
        isFormLocked: false
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._changeFormLock = this._changeFormLock.bind(this);
    }

    _handleRatingChange(evt) {
      const {name, value} = evt.target;

      this.setState({
        [name]: value,
        isRatingFilled: true
      });
    }

    _handleReviewChange(evt) {
      const {name, value} = evt.target;

      this.setState({
        [name]: value,
        isReviewFilled: value.length > ReviewLength.MINIMUM && value.length < ReviewLength.MAXIMUM ? true : false
      });
    }

    _changeFormLock() {
      this.setState({
        isFormLocked: !this.state.isFormLocked
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          isReviewFilled={this.state.isReviewFilled}
          isRatingFilled={this.state.isRatingFilled}
          isFormLocked={this.state.isFormLocked}
          rating={this.state.rating}
          review={this.state.review}
          changeFormLock={this._changeFormLock}
        />
      );
    }
  }

  WithActiveReviewForm.propTypes = {};

  return WithActiveReviewForm;
};

export default withActiveReviewForm;
