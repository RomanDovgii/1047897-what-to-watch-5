import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import withActiveReviewForm from "./with-active-review-form";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withActiveReviewForm(MockComponent);

it(
    `Should render correct withActiveReviewForm`,
    () => {
      const tree = renderer
      .create(
          <MockComponentWrapped>
            <React.Fragment/>
          </MockComponentWrapped>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
