import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const TestComponent = `<div/>`;
const SecondTestComponent = `<video/>`;
const ThirdTestComponent = () => {
  return (
    <video/>
  );
};

it(
    `Should render correct VideoPlayer with given children`,
    () => {
      const tree = renderer
      .create(
          <VideoPlayer>
            <TestComponent/>
          </VideoPlayer>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct VideoPlayer with given children`,
    () => {
      const tree = renderer
      .create(
          <VideoPlayer>
            <SecondTestComponent/>
          </VideoPlayer>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct VideoPlayer with given children`,
    () => {
      const tree = renderer
      .create(
          <VideoPlayer>
            <ThirdTestComponent/>
          </VideoPlayer>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
