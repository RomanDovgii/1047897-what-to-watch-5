import React, {PureComponent} from "react";
import {UserRating} from "../../../utils/const";

const getRatingInput = (onChange) => {
  const content = [];

  for (let i = UserRating.MINIMUM; i <= UserRating.MAXIMUM; i++) {
    content.push(
        <React.Fragment>
          <input
            className="rating__input"
            id={`star-${i}`}
            type="radio"
            name="rating"
            value={`${i}`}
            onChange={onChange}
            defaultChecked={i === UserRating.DEFAULT ? true : false}
          />
          <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
        </React.Fragment>
    );
  }

  return content;
};

class AddReview extends PureComponent {
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
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this._handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {getRatingInput(this._handleChange)}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review"
              id="review-text"
              placeholder="Review text"
              onChange={this._handleChange}
            ></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default AddReview;
