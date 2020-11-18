import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import PlayerPageControls from "./player-page-controls";

const testName = `none`;

it(
    `Should render correct PlayerPageControls with play`,
    () => {
      const tree = renderer
      .create(
          <PlayerPageControls
            onPlayButtonCLick={noop}
            onFullScreenButtonClick={noop}
            isPlaying={false}
            duration={500}
            isLoading={false}
            currentTime={0}
            movieName={testName}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct PlayerPageControls with pause`,
    () => {
      const tree = renderer
      .create(
          <PlayerPageControls
            onPlayButtonCLick={noop}
            onFullScreenButtonClick={noop}
            isPlaying={true}
            duration={500}
            isLoading={false}
            currentTime={0}
            movieName={testName}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct PlayerPageControls with loading`,
    () => {
      const tree = renderer
      .create(
          <PlayerPageControls
            onPlayButtonCLick={noop}
            onFullScreenButtonClick={noop}
            isPlaying={true}
            duration={500}
            isLoading={true}
            currentTime={0}
            movieName={testName}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
