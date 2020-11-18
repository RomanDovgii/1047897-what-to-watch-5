import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import {noop} from "../../utils/utils";
import withActiveCard from "./with-active-card";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withActiveCard(MockComponent);

it(
    `Should render correct withActiveCard`,
    () => {
      const tree = renderer
      .create(
          <MockComponentWrapped
            renderPlayer={noop}
          >
            <React.Fragment/>
          </MockComponentWrapped>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
