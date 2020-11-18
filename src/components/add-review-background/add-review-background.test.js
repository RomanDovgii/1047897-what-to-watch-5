import React from "react";
import renderer from "react-test-renderer";
import AddReviewBackground from "./add-review-background";

const testBackgroundImage = `none`;
const testName = `none`;

it(
    `Should render correct AddReviewBackground`,
    () => {
      const tree = renderer
      .create(
          <AddReviewBackground
            name={testName}
            backgroundImage={testBackgroundImage}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
