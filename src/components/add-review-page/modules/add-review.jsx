import React, {PureComponent} from "react";
import {UserRating} from "../../../utils/const";

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
                      onChange={this._handleChange}
                      key={`star-${index}`}
                      checked={`${index}` === this.state.rating}
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
              value={this.state.value}
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
