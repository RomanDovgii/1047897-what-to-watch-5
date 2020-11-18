import React from "react";
import renderer from "react-test-renderer";
import withVideoPlayer from "./with-video-player";

const MockComponent = (props) => {
  const {} = props;

  return (
    <div>
    </div>
  );
};

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
