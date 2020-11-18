import React from "react";
import renderer from "react-test-renderer";
import AddReviewPoster from "./add-review-poster";

const testPoster = `none`;
const testName = `none`;

it(
    `Should render correct AddReviewPoster`,
    () => {
      const tree = renderer
      .create(
          <AddReviewPoster
            poster={testPoster}
            name={testName}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
