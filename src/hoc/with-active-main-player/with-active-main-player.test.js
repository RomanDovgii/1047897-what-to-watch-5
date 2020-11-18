import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import withActiveMainPlayer from "./with-active-main-player";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withActiveMainPlayer(MockComponent);

it(
    `Should render correct withActiveMainPlayer`,
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
