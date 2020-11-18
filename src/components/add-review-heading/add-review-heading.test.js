import React from "react";
import renderer from "react-test-renderer";
import AddReviewHeading from "./add-review-heading";

it(
    `Should render correct AddReviewHeading`,
    () => {
      const tree = renderer
      .create(
          <AddReviewHeading/>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
