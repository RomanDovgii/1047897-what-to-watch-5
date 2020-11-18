import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import {noop} from "../../utils/utils";
import withActiveTabs from "./with-active-tabs";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withActiveTabs(MockComponent);

it(
    `Should render correct withActiveTabs`,
    () => {
      const tree = renderer
      .create(
          <MockComponentWrapped
            onWTWLogoClick={noop}
          >
            <React.Fragment/>
          </MockComponentWrapped>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
