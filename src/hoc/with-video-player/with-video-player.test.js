import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import withVideoPlayer from "./with-video-player";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(
    `Should render correct withVideoPlayer`,
    () => {
      const tree = renderer
      .create(
          <MockComponentWrapped/>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
