import React, {PureComponent} from "react";
import {UserRating} from "../../../utils/const";

const withActiveReviewForm = (Component) => {
  class WithActiveReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `${UserRating.DEFAULT}`,
        review: ``
      };

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(evt) {
      const {name, value} = evt.target;

      this.setState({
        [name]: value
      });
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      return (
        <Component
          {...this.props}
          handleChange={this._handleChange}
          handleSubmit={this._handleSubmit}
          rating={this.state.rating}
          review={this.state.review}
        />
      );
    }
  }

  WithActiveReviewForm.propTypes = {};

  return WithActiveReviewForm;
};

export default withActiveReviewForm;
