import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayerPageControls from "./player-page-controls";

const testName = `none`;

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onPlayButtonClick and onFullScreenButtonClick should be called once`,
    () => {
      const onPlayButtonClick = jest.fn();
      const onFullScreenButtonClick = jest.fn();

      const screen = shallow(
          <PlayerPageControls
            onPlayButtonClick={onPlayButtonClick}
            onFullScreenButtonClick={onFullScreenButtonClick}
            isPlaying={false}
            duration={500}
            isLoading={false}
            currentTime={0}
            movieName={testName}
          />
      );

      const playButton = screen.find(`button.player__play`);
      const fullScreenButton = screen.find(`button.player__full-screen`);

      playButton.simulate(`click`, mockEvent);
      fullScreenButton.simulate(`click`, mockEvent);

      expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
      expect(onFullScreenButtonClick).toHaveBeenCalledTimes(1);
    }
);
