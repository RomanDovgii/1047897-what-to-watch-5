import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import {AddReviewForm} from "./add-review-form";

const testBackgroundColor = `#ffffff`;
const testReview = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vel neque vestibulum ullamcorper. Quisque vulputate lobortis consectetur. Nulla enim odio, efficitur eget mattis non, tristique sit amet nisl. Etiam sed purus lorem. Proin at quam varius, molestie tellus ac, vulputate ante.`;

it(
    `Should render correct AddReviewForm`,
    () => {
      const tree = renderer
      .create(
          <AddReviewForm
            onRatingChange={noop}
            onReviewChange={noop}
            backgroundColor={testBackgroundColor}
            isReviewFilled={true}
            isRatingFilled={true}
            isFormLocked={false}
            rating={4}
            review={testReview}
            id={1}
            onSubmit={noop}
            onChangeFormLock={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render locked AddReviewForm`,
    () => {
      const tree = renderer
      .create(
          <AddReviewForm
            onRatingChange={noop}
            onReviewChange={noop}
            backgroundColor={testBackgroundColor}
            isReviewFilled={true}
            isRatingFilled={true}
            isFormLocked={true}
            rating={4}
            review={testReview}
            id={1}
            onSubmit={noop}
            onChangeFormLock={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
