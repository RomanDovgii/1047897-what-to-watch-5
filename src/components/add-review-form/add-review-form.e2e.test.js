import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils/utils";
import {AddReviewForm} from "./add-review-form";

const testBackgroundColor = `#ffffff`;

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onRating should be called only once`,
    () => {
      const onRatingChange = jest.fn();

      const screen = shallow(
          <AddReviewForm
            onRatingChange={onRatingChange}
            onReviewChange={noop}
            backgroundColor={testBackgroundColor}
            isReviewFilled={true}
            isRatingFilled={true}
            isFormLocked={false}
            rating={`4`}
            review={``}
            id={`1`}
            onSubmit={noop}
            onChangeFormLock={noop}
          />
      );

      const input = screen.find(`input.rating__input`).at(1);

      input.simulate(`change`, mockEvent);

      expect(onRatingChange).toHaveBeenCalledTimes(1);
    }
);

it(
    `onReviewChange should be called only once`,
    () => {
      const onReviewChange = jest.fn();

      const screen = shallow(
          <AddReviewForm
            onRatingChange={noop}
            onReviewChange={onReviewChange}
            backgroundColor={testBackgroundColor}
            isReviewFilled={true}
            isRatingFilled={true}
            isFormLocked={false}
            rating={`4`}
            review={``}
            id={`1`}
            onSubmit={noop}
            onChangeFormLock={noop}
          />
      );

      const input = screen.find(`textarea.add-review__textarea`);

      input.simulate(`change`, mockEvent);

      expect(onReviewChange).toHaveBeenCalledTimes(1);
    }
);

it(
    `onSubmit and onChangeFormLock should be called only once`,
    () => {
      const onSubmit = jest.fn();
      const onChangeFormLock = jest.fn();

      const screen = shallow(
          <AddReviewForm
            onRatingChange={noop}
            onReviewChange={noop}
            backgroundColor={testBackgroundColor}
            isReviewFilled={true}
            isRatingFilled={true}
            isFormLocked={false}
            rating={`4`}
            review={``}
            id={`1`}
            onSubmit={onSubmit}
            onChangeFormLock={onChangeFormLock}
          />
      );

      const input = screen.find(`form.add-review__form`);

      input.simulate(`submit`, mockEvent);

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onChangeFormLock).toHaveBeenCalledTimes(1);
    }
);
