import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import withLoading from "./with-loading";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withLoading(MockComponent);

it(
    `Should render correct withLoading`,
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
