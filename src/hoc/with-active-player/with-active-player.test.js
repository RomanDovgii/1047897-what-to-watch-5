import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import withActivePlayer from "./with-active-player";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withActivePlayer(MockComponent);

it(
    `Should render correct withActivePlayer`,
    () => {
      const tree = renderer
      .create(
          (<MockComponentWrapped>
            <React.Fragment/>
          </MockComponentWrapped>),
          {
            createNodeMock() {
              return {};
            }
          }
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
